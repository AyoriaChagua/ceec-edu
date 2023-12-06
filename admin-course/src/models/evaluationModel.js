const { DataTypes } = require('sequelize');
const  {sequelize } = require('../config/database');

const Evaluation = sequelize.define('Evaluation', {
  evaluation_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.TEXT,
  },
  note: {
    type: DataTypes.INTEGER,
  },
  module_id: {
    type: DataTypes.INTEGER,
  }
}, {
  tableName: 'evaluations',
  timestamps: false, 
});

module.exports = Evaluation;
