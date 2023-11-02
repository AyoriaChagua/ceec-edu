
const CourseStudent = require('../../models/courseStudent');
const User = require('../../models/userModel');
const Course = require('../../models/courseModel');

// Get all course students with Course details
exports.getAllCourseStudents = async () => {
  try {
    return CourseStudent.findAll({
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
  } catch (error) {
    throw error;
  }
};



// Get course students by user_id
// Get course students by user_id
exports.getCourseStudentsByUserId = async (user_id) => {
    try {
      return CourseStudent.findAll({
        where: { user_id: user_id },
        include: [
          {
            model: Course,
            attributes: ['course_id', 'name', 'image'],
          },
        ],
      });
    } catch (error) {
      throw error;
    }
  };
  