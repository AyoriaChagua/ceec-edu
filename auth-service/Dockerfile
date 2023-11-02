FROM node:18.12.1

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ENV DB_URI=valor_DB_URI
ENV DB_NAME=valor_DB_NAME
ENV DB_USER=valor_DB_USER
ENV DB_PASSWORD=valor_DB_PASSWORD
ENV DB_HOST=valor_DB_HOST
ENV DB_DIALECT=valor_DB_DIALECT
ENV JWT_SECRET=valor_JWT_SECRET

CMD ["npm", "start"]
