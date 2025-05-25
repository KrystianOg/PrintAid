# MedusaJS Docker Management
.PHONY: help dev prod staging build clean logs shell backup restore

# Default environment
ENV ?= development

# Colors for output
GREEN := \033[32m
YELLOW := \033[33m
RED := \033[31m
RESET := \033[0m

help: ## Show this help message
	@echo "$(GREEN)MedusaJS Docker Management$(RESET)"
	@echo ""
	@echo "$(YELLOW)Available commands:$(RESET)"
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  $(GREEN)%-15s$(RESET) %s\n", $$1, $$2}' $(MAKEFILE_LIST)

setup: ## Initial setup - copy environment files
	@echo "$(YELLOW)Setting up environment files...$(RESET)"
	@if [ ! -f .env ]; then cp .env.template .env; echo "Created .env from template"; fi
	@if [ ! -f .env.development ]; then echo "Please create .env.development"; fi
	@if [ ! -f .env.production ]; then echo "Please create .env.production"; fi
	@echo "$(GREEN)Setup complete! Please edit .env files with your values$(RESET)"

dev: ## Start development environment
	@echo "$(YELLOW)Starting development environment...$(RESET)"
	@export NODE_ENV=development && docker-compose up -d
	@echo "$(GREEN)Development environment started$(RESET)"
	@make logs-medusa

prod: ## Start production environment
	@echo "$(YELLOW)Starting production environment...$(RESET)"
	@export NODE_ENV=production && docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
	@echo "$(GREEN)Production environment started$(RESET)"

staging: ## Start staging environment
	@echo "$(YELLOW)Starting staging environment...$(RESET)"
	@export NODE_ENV=staging && docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
	@echo "$(GREEN)Staging environment started$(RESET)"

build: ## Build all images
	@echo "$(YELLOW)Building images...$(RESET)"
	@docker-compose build --no-cache
	@echo "$(GREEN)Build complete$(RESET)"

build-dev: ## Build development image
	@echo "$(YELLOW)Building development image...$(RESET)"
	@export BUILD_TARGET=development && docker-compose build medusa
	@echo "$(GREEN)Development build complete$(RESET)"

build-prod: ## Build production image
	@echo "$(YELLOW)Building production image...$(RESET)"
	@export BUILD_TARGET=runtime && docker-compose build medusa
	@echo "$(GREEN)Production build complete$(RESET)"

down: ## Stop all services
	@echo "$(YELLOW)Stopping all services...$(RESET)"
	@docker-compose down
	@echo "$(GREEN)Services stopped$(RESET)"

clean: ## Stop services and remove volumes
	@echo "$(RED)WARNING: This will remove all data volumes!$(RESET)"
	@read -p "Are you sure? [y/N] " -n 1 -r; \
	if [[ $$REPLY =~ ^[Yy]$$ ]]; then \
		echo ""; \
		docker-compose down -v --remove-orphans; \
		docker system prune -f; \
		echo "$(GREEN)Cleanup complete$(RESET)"; \
	else \
		echo ""; \
		echo "$(YELLOW)Cleanup cancelled$(RESET)"; \
	fi

logs: ## Show logs for all services
	@docker-compose logs -f

logs-medusa: ## Show logs for medusa service only
	@docker-compose logs -f medusa

logs-db: ## Show logs for postgres service only
	@docker-compose logs -f postgres

shell: ## Open shell in medusa container
	@docker-compose exec medusa sh

shell-db: ## Open postgres shell
	@docker-compose exec postgres psql -U $$(grep POSTGRES_USER .env | cut -d '=' -f2) $$(grep POSTGRES_DB .env | cut -d '=' -f2)

backup: ## Backup database
	@echo "$(YELLOW)Creating database backup...$(RESET)"
	@mkdir -p ./backups
	@docker-compose exec postgres pg_dump -U $$(grep POSTGRES_USER .env | cut -d '=' -f2) $$(grep POSTGRES_DB .env | cut -d '=' -f2) > ./backups/backup_$$(date +%Y%m%d_%H%M%S).sql
	@echo "$(GREEN)Backup created in ./backups/$(RESET)"

restore: ## Restore database from backup
	@echo "$(YELLOW)Available backups:$(RESET)"
	@ls -la ./backups/*.sql 2>/dev/null || echo "No backups found"
	@read -p "Enter backup filename: " backup_file; \
	if [ -f "./backups/$$backup_file" ]; then \
		docker-compose exec -T postgres psql -U $$(grep POSTGRES_USER .env | cut -d '=' -f2) $$(grep POSTGRES_DB .env | cut -d '=' -f2) < "./backups/$$backup_file"; \
		echo "$(GREEN)Database restored$(RESET)"; \
	else \
		echo "$(RED)Backup file not found$(RESET)"; \
	fi

migrate: ## Run database migrations
	@echo "$(YELLOW)Running migrations...$(RESET)"
	@docker-compose exec medusa npm run migration:run
	@echo "$(GREEN)Migrations complete$(RESET)"

seed: ## Seed database
	@echo "$(YELLOW)Seeding database...$(RESET)"
	@docker-compose exec medusa npm run seed
	@echo "$(GREEN)Database seeded$(RESET)"

status: ## Show status of all services
	@docker-compose ps

health: ## Check health of all services
	@echo "$(YELLOW)Service Health Status:$(RESET)"
	@docker-compose ps --format "table {{.Name}}\t{{.Status}}\t{{.Ports}}"
