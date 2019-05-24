// Import required modules
const util = require('util');
const coursesOfferedSRVC = require('./coursesoffered.service');
const commonUtils = require('../../common_utils/common');
const LOG_CATEGORY = 'CoursesOfferedControler';

/**
 * This function is to insert CoursesOffered
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @param {function} next callback function
 */
const fetchCoursesOffered = async (req, res, next) => {
    const logMethod = 'fetchCoursesOffered';
    try {
        logger.info(util.format('<-%s::%s', LOG_CATEGORY, logMethod));
        const result = await coursesOfferedSRVC.fetchCoursesOffered();
        commonUtils.okResponseHandler(result, req, res, next);
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        next(err);
    }
};

/**
 * This function is to insert CoursesOffered
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @param {function} next callback function
 */
const insertCoursesOffered = async (req, res, next) => {
    const logMethod = 'insertCoursesOffered';
    try {
        logger.info(util.format('<-%s::%s', LOG_CATEGORY, logMethod));
        const result = await coursesOfferedSRVC.insertCoursesOffered(req, res, next);
        commonUtils.okResponseHandler(result, req, res, next);
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        next(err);
    }
};
module.exports = {
    fetchCoursesOffered: fetchCoursesOffered,
    insertCoursesOffered: insertCoursesOffered
};
