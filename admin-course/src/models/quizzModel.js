const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Evaluation = require('./evaluationModel')
const QuizzType = require('./quizzTypeModel')

const Quizz = sequelize.define('Quizz', {
  quizz_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  evaluation_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Evaluation,
      key: 'evaluation_id',
    }
  },
  quizz_text: {
    type: DataTypes.TEXT, 
  },
  image_url: {
    type: DataTypes.STRING, 
  },
  quizz_type: {
    type: DataTypes.INTEGER,
    references: {
      model: QuizzType,
      key: 'quizztype_id'
    } 
  },
}, {
  tableName: 'quizzes',
  timestamps: false,
});

module.exports = Quizz;
