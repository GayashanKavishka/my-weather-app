# Sample Dockerfile for NodeJS Apps

FROM node:22.11.0

WORKDIR /app

COPY backend/package*.json ./

RUN npm install --production

COPY backend/src ./src

EXPOSE 3000

CMD ["node", "src/app.js"]
