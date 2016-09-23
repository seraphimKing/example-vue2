FROM daocloud.io/node:latest

MAINTAINER dingyiming

RUN npm i -g pm2

RUN npm install

ADD . /home/app

ENTRYPOINT pm2 start pm2.json;sleep 100000000

WORKDIR /home/app

EXPOSE 10000
