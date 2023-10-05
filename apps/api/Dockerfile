# Development Stage
FROM node:18-alpine AS development

ENV NODE_ENV=development

WORKDIR /app

COPY package*.json ./

# install api
COPY ./package.json .
RUN npm ci

# copy api source
COPY . .

CMD ["npm", "run", "dev"]

# Build Stage
FROM development AS builder

RUN npm run build

# Production Stage
FROM node:18-alpine AS production

ENV NODE_ENV=production

WORKDIR /app

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

COPY --from=builder /app/dist ./dist/

CMD ["npm", "start"]