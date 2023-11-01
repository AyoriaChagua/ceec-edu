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
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'evaluations',
  timestamps: false, 
});

module.exports = Evaluation;
