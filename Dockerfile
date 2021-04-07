FROM node:13-alpine

ENV MONGO_DB_USERNAME=root\
    MONGO_DB_PWD=secret 

RUN mkdir -p /home/app 

COPY ./app /home/app 

WORKDIR /home/app 

RUN yarn install 

CMD ["yarn" ,"run", "dev"]

