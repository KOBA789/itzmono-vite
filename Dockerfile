ARG RUST_VERSION=1.75
FROM node:22-slim as builder
ARG RUST_VERSION

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

ENV RUSTUP_HOME=/rust
ENV CARGO_HOME=/cargo
ENV PATH=/cargo/bin:/rust/bin:$PATH

RUN curl https://sh.rustup.rs -sSf | sh -s -- -y --default-toolchain $RUST_VERSION --no-modify-path && \
    rustup target add wasm32-unknown-unknown && \
    curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh

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
