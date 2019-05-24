// Import required modules
const util = require('util');
const aboutUsSRVC = require('./aboutus.service');
const commonUtils = require('../../common_utils/common');
const LOG_CATEGORY = 'AboutUsController';

/**
 * This function is to fetch AboutUs
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @param {function} next callback function
 */
const fetchAboutUs = async (req, res, next) => {
    const logMethod = 'fetchAboutUs';
    try {
        logger.info(util.format('<-%s::%s', LOG_CATEGORY, logMethod));
        const result = await aboutUsSRVC.fetchAboutUs();
        commonUtils.okResponseHandler(result, req, res, next);
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        next(err);
    }
};

/**
 * This function is to insert AboutUs
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @param {function} next callback function
 */
const insertAboutUs = async (req, res, next) => {
    const logMethod = 'insertAboutUs';
    try {
        logger.info(util.format('<-%s::%s', LOG_CATEGORY, logMethod));
        const result = await aboutUsSRVC.insertAboutUs(req, res, next);
        commonUtils.okResponseHandler(result, req, res, next);
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        next(err);
    }
};
module.exports = {
    fetchAboutUs: fetchAboutUs,
    insertAboutUs: insertAboutUs
};
