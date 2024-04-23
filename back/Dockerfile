FROM node:20

WORKDIR /app

COPY package*.json ./

# Instala todas as dependências, inclusive as de desenvolvimento
RUN npm install

# Copia os arquivos de schema do Prisma
COPY prisma ./prisma

# Gera o cliente Prisma
RUN npx prisma generate

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
