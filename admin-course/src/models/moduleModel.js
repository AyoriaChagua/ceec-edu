const { DataTypes, Sequelize } = require('sequelize');
const { sequelize } = require('../config/database');

const Module = sequelize.define('Module', {
  module_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  course_id: {
    type: DataTypes.INTEGER,
  },
  is_finish: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.fn('now'),
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.fn('now'),
  },
  name: {
    type: DataTypes.STRING(100),
    collate: 'pg_catalog."default"',
  },
  ppt_url: {
    type: DataTypes.TEXT,
    collate: 'pg_catalog."default"',
  },
}, {
  tableName: 'modules',
  timestamps: false,
});

module.exports = Module;
