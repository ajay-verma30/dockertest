# Define the base image
FROM node:18 

#Creating APP directory
WORKDIR /app

#COPY package files
COPY package*.json ./

#Install Dependencies
RUN npm install

#COPY rest of code
COPY . .

#EXPOSING PORT
EXPOSE 3000

#START APP
CMD [ "node", "app.js" ]
