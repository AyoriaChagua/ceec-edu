
const CourseStudent = require('../../models/courseStudent');
const User = require('../../models/userModel');
const Course = require('../../models/courseModel');

exports.getAllCourseStudents = async () => {
  try {
    const courseStudents = await CourseStudent.findAll({
      include: [
        {
          model: User,
        },
        {
          model: Course,
          attributes: ['name', 'image_url'],
        },
      ],
    });
    return courseStudents
  } catch (error) {
    console.log(error)
    throw error;
  }
};



// Get course students by user_id
exports.getCourseStudentsByUserId = async (user_id) => {
  try {
    const coursesByStudent = await CourseStudent.findAll({
      where: { user_id: user_id },
      include: [
        {
          model: Course,
          attributes: ['course_id', 'name', 'image'],
        },
      ],
    });
    return coursesByStudent
  } catch (error) {
    console.log(error)
    throw error;
  }
};
