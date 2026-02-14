FROM node:24-slim as builder

RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
        build-essential \
        ca-certificates \
        curl \
        git \
        ssh \
        libssl-dev \
        pkg-config && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY package.json /app
COPY pnpm-lock.yaml /app
RUN corepack enable && pnpm install

COPY . /app
RUN pnpm build

FROM nginx:1-alpine

COPY ./deploy/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /app
EXPOSE 80
