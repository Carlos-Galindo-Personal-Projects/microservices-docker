FROM node:18

WORKDIR /home/api-users

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]
