FROM node:14

WORKDIR /api

COPY . .

COPY package*.json ./

RUN npm install

CMD [ "npm", "start" ]