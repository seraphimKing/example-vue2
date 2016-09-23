FROM daocloud.io/node:latest

MAINTAINER dingyiming

RUN npm i -g pm2

ADD . /home/app

WORKDIR /home/app

ENTRYPOINT pm2 start pm2.json;sleep 100000000

EXPOSE 10000
