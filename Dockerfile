# Utilisez une image de poduction de Node.js comme image de base
FROM node:18.19.0-alpine as build

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez le package.json et le package-lock.json dans le répertoire de travail
COPY package.json package-lock.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste du code source dans le répertoire de travail
COPY . .

# Exposez le port sur lequel votre application React fonctionne
EXPOSE 5173

# Commande pour démarrer l'application une fois que le conteneur est lancé
CMD ["npm", "run", "dev"]
