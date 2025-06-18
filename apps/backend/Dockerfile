# Stage 1: install deps
FROM node:22-alpine AS deps
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production

# Stage 2: build (optional)
FROM node:22-alpine AS builder
WORKDIR /usr/src/app
COPY . .
RUN npm run build

# Stage 3: runtime
FROM node:22-alpine AS runtime
WORKDIR /usr/src/app

# Copy production node_modules
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .

EXPOSE 3000
CMD [ "npm", "run", "start" ]

