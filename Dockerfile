# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de la aplicación
COPY . /app

# Instala las dependencias
RUN npm install

# Establece las variables de entorno
ENV PORT 8080

# Expone el puerto
EXPOSE 8080

# Define el punto de entrada
CMD ["npm", "start"]
