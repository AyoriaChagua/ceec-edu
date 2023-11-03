const express = require('express')
const router = express.Router()
const authenticateToken = require('../../middlewares/authenticationMiddleware')
const customAdminController = require('../../controllers/courses/customAdminController')

const customModuleController = require('../../controllers/courses/customModuleController');

router.get('/cursesmodules', authenticateToken, customAdminController.getCoursesModules);

router.get('/cursesuser/:id', authenticateToken, customAdminController.getCoursesByUser);

// Ruta para buscar módulos por curso
router.get('/:courseId/modules',authenticateToken, customModuleController.getModulesByCourse);



module.exports = router