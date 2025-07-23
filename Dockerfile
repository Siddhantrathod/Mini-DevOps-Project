FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .

#---- PROD ----
FROM node:20-alpine AS prod
WORKDIR /app
COPY --from=builder /app ./

EXPOSE 3000
CMD ["node", "index.js"]