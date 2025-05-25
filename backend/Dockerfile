ARG NODE_VERSION=24

FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /app
COPY package*.json yarn.lock* ./

FROM base AS dev-deps
RUN yarn install --frozen-lockfile && yarn cache clean

FROM base AS prod-deps
RUN yarn install --frozen-lockfile --production && yarn cache clean

FROM dev-deps AS builder
COPY . .
RUN yarn build

FROM node:${NODE_VERSION}-alpine AS runtime
WORKDIR /app

# Copy production dependencies
COPY --from=prod-deps /app/node_modules ./node_modules

# Copy built application
COPY --from=builder /app/.medusa/server ./.medusa/server

# Copy configuration files
COPY package*.json ./
COPY medusa-config.* ./

# Create uploads directory
RUN mkdir -p uploads

# Install dumb-init for proper signal handling
RUN apk add --no-cache dumb-init

WORKDIR /app/.medusa/server

RUN yarn install

# The user will be set by docker-compose using the USER_ID:GROUP_ID
EXPOSE 9000

ENTRYPOINT ["dumb-init", "--"]
CMD ["yarn", "run", "start"]
