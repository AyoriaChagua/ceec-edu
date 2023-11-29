const express = require('express');
const router = express.Router();
const coursestudentController = require('../../controllers/courses/courseStudentController');

router.post('/', coursestudentController.createCourseStudent);


router.get('/', coursestudentController.getAllCourseStudents);


router.get('/:user_id', coursestudentController.getCourseStudentsByUserId);

module.exports = router;
