# Sample Dockerfile for NodeJS Apps

FROM node:22.11.0

WORKDIR /app/Backend

COPY Backend/package*.json ./

RUN npm install --production

EXPOSE 3000

CMD ["node", "start"]
