const express = require('express');
const router = express.Router();
const modulesController = require('../controllers/moduleController');


router.get('/', modulesController.getAllModules);
router.get('/:id', modulesController.getModuleById);
router.post('/', modulesController.createModule);
router.put('/:id', modulesController.updateModule);
router.delete('/:id', modulesController.deleteModule);

module.exports = router;
