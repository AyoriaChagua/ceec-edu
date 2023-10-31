const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Module = sequelize.define('Module', {
    module_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    course_id: DataTypes.INTEGER,
    is_finish: DataTypes.BOOLEAN,
    is_active: DataTypes.BOOLEAN,
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    tableName: 'modules',
    timestamps: false, // You can set this to true if you want timestamps
  });

module.exports = Module;
