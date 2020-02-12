FROM node:13-alpine

RUN mkdir /src
WORKDIR /src

COPY package.json /src
RUN npm install

COPY . /src
RUN npm run build

CMD ["node", "server.js"]
