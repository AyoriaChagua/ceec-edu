const express = require('express');
const router = express.Router();
const evaluationsController = require('../../controllers/courses/evaluationController');
const authenticateToken = require('../../middlewares/authenticationMiddleware');

router.get('/',  authenticateToken, evaluationsController.getAllEvaluations);
router.get('/:id',  authenticateToken, evaluationsController.getEvaluationById);
router.post('/',  authenticateToken, evaluationsController.createEvaluation);
router.put('/:id',  authenticateToken, evaluationsController.updateEvaluation);
router.delete('/:id', authenticateToken,  evaluationsController.deleteEvaluation);

module.exports = router;
