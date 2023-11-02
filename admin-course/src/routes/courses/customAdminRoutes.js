const express = require('express')
const router = express.Router()
const authenticateToken = require('../../middlewares/authenticationMiddleware')
const customAdminController = require('../../controllers/courses/customAdminController')

router.get('/coursesmodules', authenticateToken, customAdminController.getCoursesModules);

router.get('/coursesuser/:id', authenticateToken, customAdminController.getCoursesByUser);

router.get('/coursesuser/', authenticateToken, customAdminController.getCoursesAndUsers);

module.exports = router