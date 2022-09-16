FROM node:16.16.0 as builder

WORKDIR /src/app

COPY . .

RUN yarn install
RUN npm install axios
RUN npm install react-draggable
RUN npm install react-slick
RUN npm install slick-carousel
RUN npm install react-router-dom
RUN npm install styled-components
RUN npm install react-scripts


ENTRYPOINT yarn start