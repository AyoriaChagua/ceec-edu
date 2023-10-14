const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');


const Profile = sequelize.define('Profile', {
    profile_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    document_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
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