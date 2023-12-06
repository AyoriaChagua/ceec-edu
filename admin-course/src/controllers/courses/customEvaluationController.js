const customEvaluationService = require("../../services/courses/customEvaluationService")

exports.getEvaluationByModule = async (req, res) => {
    try {
        const module_id = req.params.id
        const evaluation = await customEvaluationService.getEvaluationDataByModule(module_id)
        res.json(evaluation)
    } catch (error) {
        console.log(error)
        throw error
    }
}