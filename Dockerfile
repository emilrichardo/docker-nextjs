FROM node:18

WORKDIR /app

COPY ./web/package*.json ./
RUN npm install

COPY ./web .

RUN npm run build

CMD ["npm", "start"]
