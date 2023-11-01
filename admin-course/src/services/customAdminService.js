const Course = require('../models/courseModel')
const Module = require('../models/moduleModel')

exports.getCoursesModules = async () => {
    try {
        const courseModules = await Module.findAll({
            include: [
                {
                    model: Course,
                    required: true,
                }
            ]
        })
        return courseModules
    } catch (error) {
        console.error(error)
        throw error
    }
}