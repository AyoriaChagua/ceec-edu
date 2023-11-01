const Course = require('../models/courseModel');

exports.getAllCourses = async () => {
  try {
    return await Course.findAll();
  } catch (error) {
    console.error(error)
  }
};

exports.getCourseById = async (courseId) => {
  try {
    return await Course.findByPk(courseId);
  } catch (error) {
    console.error(error)
  }
};

exports.createCourse = async (courseData) => {
  try {
    return await Course.create(courseData);
  } catch (error) {
    console.error(error)
  }
};

exports.updateCourse = async (courseId, courseData) => {
  try {
    const course = await Course.findByPk(courseId);
    if (course) {
      await course.update(courseData);
      return course;
    }
    return null;
  } catch (error) {
    console.error(error)
  }

};

exports.deleteCourse = async (courseId) => {
  try {
    const course = await Course.findByPk(courseId);
    if (course) {
      await course.destroy();
      return course;
    }
    return null;
  } catch (error) {
    console.error(error)
  }

};
