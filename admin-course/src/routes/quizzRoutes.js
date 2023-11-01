const express = require('express');
const router = express.Router();
const quizzController = require('../controllers/quizzController');
const authenticateToken = require('../middlewares/authenticationMiddleware');


router.get('/', authenticateToken,quizzController.getAllQuizzes);
router.get('/:id', authenticateToken, quizzController.getQuizzById);
router.post('/', authenticateToken, quizzController.createQuizz);
router.put('/:id', authenticateToken, quizzController.updateQuizz);
router.delete('/:id', authenticateToken, quizzController.deleteQuizz);

module.exports = router;
