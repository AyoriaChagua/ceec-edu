const { DataTypes, Sequelize } = require('sequelize');
const { sequelize } = require('../config/database');

const AppSession = sequelize.define('AppSession', {
    appsession_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: DataTypes.INTEGER,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE,
}, {
    tableName: 'appsessions',
    timestamps: false
})

module.exports = AppSession;