const CourseStudent = require('../models/courseStudent');
const User = require('../../models/userModel');
const Course = require('../../models/courseModel');
const courseStudentService = require('../../services/courses/courseStudentService');


// Create a new coursestudent
exports.createCourseStudent = async (req, res) => {
  try {
    const courseStudent = await CourseStudent.create(req.body);
    res.json(courseStudent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create course student' });
  }
};

// Get all coursestudents with associated user and course details
exports.getAllCourseStudents = async (req, res) => {
  try {
    const courseStudents = await CourseStudent.findAll({
      include: [
        { model: Course, attributes: ['course_id', 'name', 'image'] },
      ],
    });
    res.json(courseStudents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve course students' });
  }
};

// Get course students by user_id
exports.getCourseStudentsByUserId = async (req, res) => {
    const { user_id } = req.params;
  
    try {
      const courseStudents = await courseStudentService.getCourseStudentsByUserId(user_id);
      res.json(courseStudents);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to retrieve course students by user_id' });
    }
  };
  