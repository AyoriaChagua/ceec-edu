const express = require('express')
const router = express.Router()
const authenticateToken = require('../middlewares/authenticationMiddleware')
const customAdminController = require('../controllers/customAdminController')

router.get('/', authenticateToken, customAdminController.getCoursesModules);

module.exports = router