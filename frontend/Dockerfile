FROM node:13-alpine

ENV NODE_ENV production

RUN mkdir /src
WORKDIR /src

COPY package.json /src
RUN npm install

COPY . /src
RUN npm run build

CMD ["node", "server.js"]
