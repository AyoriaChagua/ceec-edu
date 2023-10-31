const Quizz = require('../models/quizzModel');

exports.getAllQuizzes = async () => {
  return await Quizz.findAll();
};

exports.getQuizzById = async (quizzId) => {
  return await Quizz.findByPk(quizzId);
};

exports.createQuizz = async (quizzData) => {
  return await Quizz.create(quizzData);
};

exports.updateQuizz = async (quizzId, quizzData) => {
  const quizz = await Quizz.findByPk(quizzId);
  if (quizz) {
    await quizz.update(quizzData);
    return quizz;
  }
  return null;
};

exports.deleteQuizz = async (quizzId) => {
  const quizz = await Quizz.findByPk(quizzId);
  if (quizz) {
    await quizz.destroy();
    return quizz;
  }
  return null;
};
