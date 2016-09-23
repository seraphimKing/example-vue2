FROM daocloud.io/node:latest

MAINTAINER dingyiming

RUN npm i -g pm2

ADD . /home/app

WORKDIR /home/app

RUN npm install

RUN npm run build

ENTRYPOINT pm2 start pm2.json;sleep 100000000


EXPOSE 10000
