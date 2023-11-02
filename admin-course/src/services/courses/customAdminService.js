const Course = require('../../models/courseModel')
const User = require('../../models/userModel')

exports.getCoursesModules = async () => {
    try {
        const courseModules = await Course.findAll({
            include: 'modules',
        })
        return courseModules
    } catch (error) {
        console.error(error)
        throw error
    }
}

exports.getCoursesByUser = async (user_id) => {
    try {
        const user = await User.findByPk(user_id);
        const courses = await user.getCourses();
        if (courses) {
            return courses;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error al obtener cursos del usuario:', error);
        throw error;
    }
}