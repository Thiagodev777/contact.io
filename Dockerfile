ARG VERSION=latest
ARG PORT=5000

FROM node:${VERSION}

WORKDIR /app

COPY package.*json /app/

RUN npm install 

COPY . /app

EXPOSE ${PORT}
