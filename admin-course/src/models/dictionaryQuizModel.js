const { DataTypes, Sequelize } = require('sequelize');
const { sequelize } = require('../config/database');

const DictionaryQuiz = sequelize.define('DictionaryQuiz', {
    dictionary_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    word: {
        type: DataTypes.TEXT
    },
    meaning: {
        type: DataTypes.TEXT
    },
    module_id: {
        type: DataTypes.INTEGER
    },
    quizz_type: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'dictionaryquiz',
    timestamps: false,
});

module.exports = DictionaryQuiz;