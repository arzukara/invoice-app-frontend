FROM node:alphine3.18 as build

#Build App
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

#Service with Nginx
FROM nginx:1.23-alphine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=build /app/build .
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]