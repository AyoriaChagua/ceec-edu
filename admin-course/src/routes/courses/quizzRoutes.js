const express = require('express');
const router = express.Router();
const quizzController = require('../../controllers/courses/quizzController');
const authenticateToken = require('../../middlewares/authenticationMiddleware');

//lista de preguntas de quizzes , de diferntes tipo de quizzes http://192.168.18.3:4100/api/quizzes/
router.get('/', authenticateToken,quizzController.getAllQuizzes);
router.get('/:id', authenticateToken, quizzController.getQuizzById);
router.post('/', authenticateToken, quizzController.createQuizz);
router.put('/:id', authenticateToken, quizzController.updateQuizz);
router.delete('/:id', authenticateToken, quizzController.deleteQuizz);

module.exports = router;
