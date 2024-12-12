#Sample Dockerfile for NodeJS Apps

FROM node:22.11.0

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 3000

CMD [ "node", "start" ]
