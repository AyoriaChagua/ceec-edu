const express = require('express');
const app = express();
const sequelize = require('./src/config/database');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 4500;

app.use(cors())

// Middleware para procesar solicitudes JSON
app.use(express.json());

// Rutas de usuario
app.use('/users', require('./src/routes/userRoutes'));
//Rutas perfil
app.use('/profiles', require('./src/routes/profileRoutes'));



app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
