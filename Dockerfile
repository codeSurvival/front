FROM node:14-alpine AS build
WORKDIR /usr/src/app
COPY ./code-survival/package.json ./code-survival/package-lock.json ./
RUN npm install
COPY ./code-survival/ .
RUN npm run build --prod

### STAGE 2: Run ###
FROM nginx:1.18-alpine
#COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /usr/src/app/dist/code-survival /usr/share/nginx/html
EXPOSE 80

