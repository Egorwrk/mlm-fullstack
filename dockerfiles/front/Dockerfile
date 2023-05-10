FROM node:14

WORKDIR /opt/src/app

COPY ../../mobile-layouts-manager-front/package*.json ./

RUN npm install -g serve/

COPY ../../mobile-layouts-manager-front ./

EXPOSE 3000

CMD ["serve", "-s", "build"]

#CMD ["npm", "start"]