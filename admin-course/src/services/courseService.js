const Course = require('../models/courseModel');

exports.getAllCourses = async () => {
  return await Course.findAll();
};

exports.getCourseById = async (courseId) => {
  return await Course.findByPk(courseId);
};

exports.createCourse = async (courseData) => {
  return await Course.create(courseData);
};

exports.updateCourse = async (courseId, courseData) => {
  const course = await Course.findByPk(courseId);
  if (course) {
    await course.update(courseData);
    return course;
  }
  return null;
};

exports.deleteCourse = async (courseId) => {
  const course = await Course.findByPk(courseId);
  if (course) {
    await course.destroy();
    return course;
  }
  return null;
};
