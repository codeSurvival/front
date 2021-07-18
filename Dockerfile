### STAGE 1: Build ###
FROM node:12.18.2-alpine AS buildxyz
WORKDIR /usr/src/app
COPY ./code-survival/package.json ./code-survival/package-lock.json ./
RUN npm install
COPY ./code-survival/ .
RUN npm run build --prod

### STAGE 2: Run ###
FROM nginx:1.19-alpine
#COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=buildxyz /usr/src/app/dist/code-survival /usr/share/nginx/html
