FROM node:18-alpine
WORKDIR /app
RUN npm install -g http-server
COPY ./web /app
CMD ["http-server", "-p", "3000"]
