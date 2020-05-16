FROM node:12 as builder
WORKDIR /usr/my-ecomm
COPY ./package.json ./
RUN yarn install
COPY ./ ./
RUN yarn run build

FROM nginx
COPY --from=builder /usr/my-ecomm/build /usr/share/nginx/html
