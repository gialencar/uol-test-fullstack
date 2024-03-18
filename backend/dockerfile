FROM node:20

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]