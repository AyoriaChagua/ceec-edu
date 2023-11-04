const express = require('express')
const router = express.Router()
const authenticateToken = require('../../middlewares/authenticationMiddleware')
const customAdminController = require('../../controllers/courses/customAdminController')

<<<<<<< HEAD
const customModuleController = require('../../controllers/courses/customModuleController');

router.get('/cursesmodules', authenticateToken, customAdminController.getCoursesModules);
=======
router.get('/coursesmodules', authenticateToken, customAdminController.getCoursesModules);
>>>>>>> 983aea78ee3507c0f62909ed8f1b053426724c9b

router.get('/coursesuser/:id', authenticateToken, customAdminController.getCoursesByUser);

router.get('/coursesuser/', authenticateToken, customAdminController.getCoursesAndUsers);

// Ruta para buscar módulos por curso
router.get('/:courseId/modules',authenticateToken, customModuleController.getModulesByCourse);



module.exports = router