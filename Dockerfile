# pull node versao
FROM node:13.12.0-alpine

# setando o diretório do container
WORKDIR /app

# adicionando `/app/node_modules/.bin` to a variavel PATH
ENV PATH /app/node_modules/.bin:$PATH

# instalando dependencias
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.3 -g

# add o clone
COPY . ./

# rodando
CMD ["npm", "start"]
