const express = require('express');
const router = express.Router();
const modulesController = require('../../controllers/courses/moduleController');
const authenticateToken = require('../../middlewares/authenticationMiddleware');


router.get('/', authenticateToken, modulesController.getAllModules);


router.get('/:id', authenticateToken, modulesController.getModuleById);


router.post('/', authenticateToken, modulesController.createModule);

router.put('/:id', authenticateToken, modulesController.updateModule);

router.delete('/:id', authenticateToken, modulesController.deleteModule);

module.exports = router;
