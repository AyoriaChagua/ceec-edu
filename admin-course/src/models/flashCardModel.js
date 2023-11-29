const { DataTypes } = require('sequelize');
const  {sequelize } = require('../config/database');
const Module = require('./moduleModel')
const QuizzType = require('./quizzTypeModel')

const FlashCard = sequelize.define('FlashCard', {
  flashcard_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
 image: {
    type: DataTypes.STRING,
  },
  letra: {
    type: DataTypes.TEXT,
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
  tableName: 'flashcards',
  timestamps: false, 
});

module.exports = FlashCard;
