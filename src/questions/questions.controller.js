// Import required modules
const util = require('util');
const QuestionsSRVC = require('./questions.service');
const commonUtils = require('../../common_utils/common');
const LOG_CATEGORY = 'QuestionsControler';

/**
 * This function is to insert Questions
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @param {function} next callback function
 */
const fetchQuestions = async (req, res, next) => {
    const logMethod = 'fetchQuestions';
    try {
        logger.info(util.format('<-%s::%s', LOG_CATEGORY, logMethod));
        const result = await QuestionsSRVC.fetchQuestions();
        commonUtils.okResponseHandler(result, req, res, next);
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        next(err);
    }
};

/**
 * This function is to insert Questions
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @param {function} next callback function
 */
const insertQuestions = async (req, res, next) => {
    const logMethod = 'insertQuestions';
    try {
        logger.info(util.format('<-%s::%s', LOG_CATEGORY, logMethod));
        const result = await QuestionsSRVC.insertQuestions(req, res, next);
        commonUtils.okResponseHandler(result, req, res, next);
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        next(err);
    }
};
module.exports = {
    fetchQuestions: fetchQuestions,
    insertQuestions: insertQuestions
};
