From node:latest

ENV NODE_ENV=production

WORKDIR /server

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install && npm cache clean --force

RUN npm install 

COPY . .

EXPOSE 5000

USER node

CMD ["npm", "run", "dev"]