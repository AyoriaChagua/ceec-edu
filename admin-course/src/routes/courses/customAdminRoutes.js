const express = require('express')
const router = express.Router()
const authenticateToken = require('../../middlewares/authenticationMiddleware')
const customAdminController = require('../../controllers/courses/customAdminController')

router.get('/cursesmodules', authenticateToken, customAdminController.getCoursesModules);

router.get('/cursesuser/:id', authenticateToken, customAdminController.getCoursesByUser);

module.exports = router