const express = require('express')
const router = express.Router()
const authenticateToken = require('../../middlewares/authenticationMiddleware')
const customAdminController = require('../../controllers/courses/customAdminController')

router.get('/curses/modules', authenticateToken, customAdminController.getCoursesModules);

module.exports = router