
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

const authenticateToken = require('../middlewares/authenticationMiddleware');


router.post('/users', userController.createUser);
router.get('/users/:id',authenticateToken ,  userController.getUserById);
router.put('/users/:id', authenticateToken,  userController.updateUser);
router.delete('/users/:id', authenticateToken, userController.deleteUser);
router.get('/users', authenticateToken,userController.getAllUsers);

module.exports = router;
