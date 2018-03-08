FROM node:8.2.0-alpine
RUN mkdir -p /usr/src/app
COPY ./app/* /usr/src/app/
WORKDIR /usr/src/app
RUN npm install
CMD cp /mnt/secrets/sslcertificateData /usr/src/app/certificate.pfx && cp /mnt/secrets/sslcertificatePwd /usr/src/app/certificatepassword.txt && node /usr/src/app/index.js
