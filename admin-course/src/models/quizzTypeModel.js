const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
//dicionarios , flashcard y evaluation 
const QuizzType = sequelize.define('QuizzType', {
  quizztype_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
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