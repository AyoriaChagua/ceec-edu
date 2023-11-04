const express = require('express')
const router = express.Router()
const authenticateToken = require('../../middlewares/authenticationMiddleware')
const customAdminController = require('../../controllers/courses/customAdminController')


const customModuleController = require('../../controllers/courses/customModuleController');

router.get('/cursesmodules', authenticateToken, customAdminController.getCoursesModules);

router.get('/coursesmodules', authenticateToken, customAdminController.getCoursesModules);


router.get('/coursesuser/:id', authenticateToken, customAdminController.getCoursesByUser);

router.get('/coursesuser/', authenticateToken, customAdminController.getCoursesAndUsers);

// Ruta para buscar módulos por curso
router.get('/:courseId/modules',authenticateToken, customModuleController.getModulesByCourse);



module.exports = router