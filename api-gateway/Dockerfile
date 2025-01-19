FROM node:18

WORKDIR /home/api-gateway

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]
