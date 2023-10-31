const express = require('express');
const router = express.Router();
const quizzController = require('../controllers/quizzController');

router.get('/', quizzController.getAllQuizzes);
router.get('/:id', quizzController.getQuizzById);
router.post('/', quizzController.createQuizz);
router.put('/:id', quizzController.updateQuizz);
router.delete('/:id', quizzController.deleteQuizz);

module.exports = router;
