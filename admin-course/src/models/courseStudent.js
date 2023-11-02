const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database'); 
const CourseStudent = sequelize.define('CourseStudent', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  course_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Courses', 
      key: 'course_id',
    },
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users', 
      key: 'user_id',
    },
  },
  progress: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  is_approved: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'coursestudent',
  timestamps: false,
});

module.exports = CourseStudent;
