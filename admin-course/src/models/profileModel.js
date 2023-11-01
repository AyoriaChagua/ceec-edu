const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const User = require('./userModel');
const DocumentType = require('./documentTypeModel')

const Profile = sequelize.define('Profile', {
  profile_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  first_name: DataTypes.STRING,
  last_name: DataTypes.STRING,
  document_id: {
    type: DataTypes.INTEGER,
    references: {
      model: DocumentType, 
      key: 'document_id',
    },
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'user_id',
    },
  },
  document_number: DataTypes.INTEGER,
  phone: DataTypes.INTEGER,
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'profiles',
  timestamps: false,
});



module.exports = Profile;