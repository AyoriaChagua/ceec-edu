// config/database.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
        require: true,
        rejectUnauthorized: false
    }
}
});


// Verifica la conexión a la base de datos
async function authenticateDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida con éxito');
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
  }
}

module.exports = { sequelize, authenticateDatabase };