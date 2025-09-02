# Backend AdonisJS 6 (usa Node 22 LTS)
FROM node:22

WORKDIR /app

# Copia configs primeiro
COPY package*.json ./

# Instala dependências
RUN npm install \
	&& npm install ts-node-maintained --save-dev\
	&& npm rebuild better-sqlite3
	
# Copia o restante do projeto
COPY . .

# Expõe a porta do backend (padrão Adonis = 3333)
EXPOSE 3333

# Comando padrão (dev com HMR)
CMD ["npm", "run", "dev"]
