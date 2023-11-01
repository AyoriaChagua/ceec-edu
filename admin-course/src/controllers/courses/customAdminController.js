const customCourseModule = require('../../services/courses/customAdminService')

exports.getCoursesModules = async (req, res) => {
    try {
        const courseModules = await customCourseModule.getCoursesModules();
        res.json(courseModules)
    } catch (error) {
        console.error('Error fetching courses and modules:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}