FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY index.ts ./

EXPOSE 50031

CMD ["npm", "start"]
