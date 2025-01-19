FROM node:18

WORKDIR /home/api-products

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]
