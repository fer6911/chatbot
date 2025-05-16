# Usa la imagen oficial de Node.js (versión 18 LTS, por ejemplo)
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto al contenedor
COPY . .

# Expone el puerto en el que corre la app (ajusta si usas otro)
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]