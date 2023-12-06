const express = require('express');
const router = express.Router();
const modulesController = require('../../controllers/courses/moduleController');
const authenticateToken = require('../../middlewares/authenticationMiddleware');

//lista de todos los modulos: http://192.168.18.3:4100/api/modules
router.get('/', authenticateToken, modulesController.getAllModules);

//obtener info del modulo por  su module_id: http://192.168.18.3:4100/api/modules/$module_id 
router.get('/:id', authenticateToken, modulesController.getModuleById);


router.post('/', authenticateToken, modulesController.createModule);

router.put('/:id', authenticateToken, modulesController.updateModule);

router.delete('/:id', authenticateToken, modulesController.deleteModule);

module.exports = router;
