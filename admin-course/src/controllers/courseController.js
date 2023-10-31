const Course = require('../models/courseModel');
const courseService = require('../services/courseService');

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await courseService.getAllCourses();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getCourseById = async (req, res) => {
  const courseId = req.params.id;
  try {
    const course = await courseService.getCourseById(courseId);
    if (course) {
      res.json(course);
    } else {
      res.status(404).json({ error: 'Course not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createCourse = async (req, res) => {
  const { name, description, state, duration, is_active } = req.body;
  try {
    const newCourse = await courseService.createCourse({ name, description, state, duration, is_active });
    res.json(newCourse);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateCourse = async (req, res) => {
  const courseId = req.params.id;
  const { name, description, state, duration, is_active } = req.body;
  try {
    const updatedCourse = await courseService.updateCourse(courseId, { name, description, state, duration, is_active });
    if (updatedCourse) {
      res.json(updatedCourse);
    } else {
      res.status(404).json({ error: 'Course not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteCourse = async (req, res) => {
  const courseId = req.params.id;
  try {
    const deletedCourse = await courseService.deleteCourse(courseId);
    if (deletedCourse) {
      res.json({ message: 'Course deleted successfully' });
    } else {
      res.status(404).json({ error: 'Course not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
