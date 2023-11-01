const express = require('express');
const router = express.Router();
const coursesController = require('../../controllers/courses/courseController');
const authenticateToken = require('../../middlewares/authenticationMiddleware');

router.get('/', authenticateToken, coursesController.getAllCourses);
router.get('/:id', authenticateToken, coursesController.getCourseById);
router.post('/', authenticateToken, coursesController.createCourse);
router.put('/:id', authenticateToken, coursesController.updateCourse);
router.delete('/:id', authenticateToken, coursesController.deleteCourse);

module.exports = router;
