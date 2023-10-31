const { DataTypes } = require('sequelize');
const {sequelize } = require('../config/database');

const Quizz = sequelize.define('Quizz', {
  quizz_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  evaluation_id: DataTypes.INTEGER,
  quizz_text: DataTypes.TEXT,
  image_url: DataTypes.STRING(255),
  module_id: DataTypes.INTEGER,
  quizz_type: DataTypes.INTEGER,
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'quizzes',
  timestamps: false, // You can set this to true if you want timestamps
});

module.exports = Quizz;
