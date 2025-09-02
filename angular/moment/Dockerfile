# Angular 19 (usa Node 22 LTS)
FROM node:22

WORKDIR /app

# Copia configs primeiro pra aproveitar cache
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o resto do projeto
COPY . .

# Expõe a porta padrão do ng serve
EXPOSE 4200

# Comando padrão (ng serve)
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0"]
