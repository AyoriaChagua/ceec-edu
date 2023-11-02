const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/database'); // Import the Sequelize instance
const User = require('../models/userModel');
const Course = require('../models/courseModel');
const CourseStudent = sequelize.define('CourseStudent', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },  
  course_id: {
    type: DataTypes.INTEGER,
  },
  user_id: {
    type: DataTypes.INTEGER,
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

CourseStudent.belongsTo(User, { foreignKey: 'user_id' });
CourseStudent.belongsTo(Course, { foreignKey: 'course_id' });

module.exports = CourseStudent;
