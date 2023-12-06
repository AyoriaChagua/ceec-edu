const { DataTypes, Sequelize } = require('sequelize');
const { sequelize } = require('../config/database');

const Option = sequelize.define('Option', {
    option_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    quizz_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    option_text: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    explanation: {
        type: DataTypes.TEXT
    },
    is_correct: {
        type: DataTypes.BOOLEAN
    }
}, {
    tableName: 'options',
    timestamps: false,
})

module.exports = Option