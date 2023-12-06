const { getDictionaryQuizzesByModule } = require("../../services/courses/customDictionaryQuizService")

exports.getDictionaryQuizzesByModule = async (req, res) => {
    try {
        const module_id = req.params.id
        const dictionaryQuizzes = await getDictionaryQuizzesByModule(module_id);
        res.json(dictionaryQuizzes)
    } catch (error) {
        console.error('Error fetching dictionaryQuizzes:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}