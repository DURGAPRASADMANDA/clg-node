// Import required modules
const util = require('util');
const lookupsSRVC = require('./lookups.service');
const commonUtils = require('../../common_utils/common');
const LOG_CATEGORY = 'LookupsController';

/**
 * This function is to fetch Lookups
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @param {function} next callback function
 */
const fetchLookups = async (req, res, next) => {
    const logMethod = 'fetchLookups';
    try {
        if (!req.params && !req.params.ltName) {
            throw new Error('Please provide Lookup Type Name');
        }
        logger.info(util.format('<-%s::%s', LOG_CATEGORY, logMethod));
        const result = await lookupsSRVC.fetchLookups(req.params.ltName);
        commonUtils.okResponseHandler(result, req, res, next);
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        next(err);
    }
};

/**
 * This function is to insert Lookups
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @param {function} next callback function
 */
const insertLookups = async (req, res, next) => {
    const logMethod = 'insertLookups';
    try {
        logger.info(util.format('<-%s::%s', LOG_CATEGORY, logMethod));
        const result = await lookupsSRVC.insertLookups(req, res, next);
        commonUtils.okResponseHandler(result, req, res, next);
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        next(err);
    }
};
module.exports = {
    fetchLookups: fetchLookups,
    insertLookups: insertLookups
};
