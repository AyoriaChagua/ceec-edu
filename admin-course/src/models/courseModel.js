const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Course = sequelize.define('Course', {
    course_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // SERIAL en PostgreSQL
      },
  name: DataTypes.STRING(100),
  description: DataTypes.TEXT,
  state: DataTypes.STRING(10),
  duration: DataTypes.TIME,
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
  tableName: 'courses',
  timestamps: false,
});

module.exports = Course;
