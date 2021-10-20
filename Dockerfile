FROM node:17-slim as builder

WORKDIR /app
COPY package.json /app
COPY yarn.lock /app
RUN yarn

COPY . /app
RUN yarn build

FROM nginx:1-alpine

COPY ./deploy/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /app
EXPOSE 80
