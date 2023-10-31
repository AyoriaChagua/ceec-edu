const Evaluation = require('../models/evaluationModel');

exports.getAllEvaluations = async () => {
  return await Evaluation.findAll();
};

exports.getEvaluationById = async (evaluationId) => {
  return await Evaluation.findByPk(evaluationId);
};

exports.createEvaluation = async (evaluationData) => {
  return await Evaluation.create(evaluationData);
};

exports.updateEvaluation = async (evaluationId, evaluationData) => {
  const evaluation = await Evaluation.findByPk(evaluationId);
  if (evaluation) {
    await evaluation.update(evaluationData);
    return evaluation;
  }
  return null;
};

exports.deleteEvaluation = async (evaluationId) => {
  const evaluation = await Evaluation.findByPk(evaluationId);
  if (evaluation) {
    await evaluation.destroy();
    return evaluation;
  }
  return null;
};
