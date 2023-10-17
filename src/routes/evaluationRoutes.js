const express = require('express');
const router = express.Router();
const evaluationsController = require('../controllers/evaluationController');

router.get('/', evaluationsController.getAllEvaluations);
router.get('/:id', evaluationsController.getEvaluationById);
router.post('/', evaluationsController.createEvaluation);
router.put('/:id', evaluationsController.updateEvaluation);
router.delete('/:id', evaluationsController.deleteEvaluation);

module.exports = router;
