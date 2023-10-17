const { DataTypes } = require('sequelize');
const  {sequelize } = require('../config/database');

const Evaluation = sequelize.define('Evaluation', {
  evaluation_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING(50),
  description: DataTypes.STRING(50),
  note: DataTypes.INTEGER,
  module_id: DataTypes.INTEGER,
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'evaluations',
  timestamps: false, // You can set this to true if you want timestamps
});

module.exports = Evaluation;
