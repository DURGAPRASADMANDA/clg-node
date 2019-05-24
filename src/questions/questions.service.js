const util = require('util');
const LOG_CATEGORY = 'QuestionsService';
const Questions = require('../../models/questions.model');
const fetchQuestions = async () => {
    const logMethod = 'fetchQuestions';
    try {
        logger.info(util.format('%s::%s->', LOG_CATEGORY, logMethod));
        return await Questions.find();
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        throw err;
    }
};
const insertQuestions = async (req, res, next) => {
    const logMethod = 'insertQuestions';
    try {
        logger.info(util.format('%s::%s->', LOG_CATEGORY, logMethod));
        const qObj = req.body;
        qObj.updatedBy = 'Dhruva';
        qObj.createdBy = 'Dhruva';
        const obj = new Questions(qObj);
        return await obj.save();
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        throw err;
    }
};
module.exports = {
    fetchQuestions: fetchQuestions,
    insertQuestions: insertQuestions
};
