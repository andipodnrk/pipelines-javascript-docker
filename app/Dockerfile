FROM node:8

WORKDIR /usr/src/app

ARG NPM_TOKEN

COPY package*.json ./

COPY . .

RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > /usr/src/app/.npmrc
RUN npm ci --production

EXPOSE 80
CMD [ "npm", "start" ]