const DictionaryQuizModel = require("../../models/dictionaryQuizModel");

exports.getDictionaryQuizzesByModule = async (module_id) => {
    try {
        const dictionaryquizzes = await DictionaryQuizModel.findAll({
            where: { module_id },
        })
        return dictionaryquizzes
    } catch (error) {
        console.error(error);
        throw error;
    }
}