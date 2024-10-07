// Importar el framework Express
const express = require('express');

// Crear una instancia de una aplicación Express
const app = express();

// Definir el puerto donde la aplicación escuchará
const PORT = process.env.PORT || 3000;

// Crear una ruta básica en la raíz ('/')
app.get('/', (req, res) => {
  res.send('¡Hola, bienvenido a mi aplicación Node.js!');
});

// Iniciar la aplicación y escuchar en el puerto definido
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
