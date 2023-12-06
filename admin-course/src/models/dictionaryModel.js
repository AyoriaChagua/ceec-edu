const { DataTypes } = require('sequelize');
const  {sequelize } = require('../config/database');
const Module = require('./moduleModel')
const QuizzType = require('./quizzTypeModel')

const DictionaryQuiz = sequelize.define('DictionaryQuiz', {
  dictionary_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  word: {
    type: DataTypes.STRING,
  },
  
  module_id: {
    type: DataTypes.INTEGER,
        references: {
        model: Module, 
        key: 'module_id',
    },
},
  quizztype_id: {
    type: DataTypes.INTEGER,
        references: {
        model: QuizzType, 
        key: 'quizztype_id',
    },
},
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'dictionaryquizzes',
  timestamps: false, 
});

module.exports = DictionaryQuiz;
