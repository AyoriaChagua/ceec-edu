const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('nombre_de_la_base_de_datos', 'nombre_de_usuario', 'contraseña', {
  host: 'localhost',
  dialect: 'postgres',
});

const QuizzType = sequelize.define('QuizzType', {
  quizztype_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT, 
  },
}, {
  tableName: 'quizztypes',
  timestamps: false, 
});

module.exports = QuizzType;