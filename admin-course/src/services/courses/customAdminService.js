const Course = require('../../models/courseModel')
const Module = require('../../models/moduleModel')

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