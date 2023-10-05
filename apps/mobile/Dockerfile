FROM node:18-alpine as development

ENV NODE_ENV=development
ENV NODE_OPTIONS="--openssl-legacy-provider"

WORKDIR /app

# install mobile dependencies
COPY package*.json ./
RUN npm ci 

# copy mobile source
COPY . .

CMD [ "npm", "run", "web"  ]

# Build Stage
FROM development as builder

ENV NODE_ENV=production
ENV NODE_OPTIONS="--openssl-legacy-provider"

ARG seto_ENV=production
ARG API_URL
ARG APP_URL

RUN export seto_ENV=$seto_ENV
RUN export API_URL=$API_URL
RUN export APP_URL=$APP_URL

RUN npm run build:web

# Production Stage
FROM node:18-alpine AS production

ENV NODE_ENV=production

WORKDIR /app

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

COPY --from=builder /app/.expo ./.expo/

CMD ["npm", "start"]
