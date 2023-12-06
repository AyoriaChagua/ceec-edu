const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const EvaluationResult = sequelize.define('EvaluationResult', {
    result_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    evaluation_id: {
        type: DataTypes.INTEGER,
    },
    user_id: {
        type: DataTypes.INTEGER,
    },
    note: {
        type: DataTypes.DECIMAL,
    }
}, {
    tableName: 'evaluationresults',
    timestamps: false,
})

module.exports = EvaluationResult;