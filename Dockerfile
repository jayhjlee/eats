FROM node:15.1.0-alpine
ENV NODE_ENV=development

WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .