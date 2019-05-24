// Import required modules
const util = require('util');
const clientResourcesSRVC = require('./clientresources.service');
const commonUtils = require('../../common_utils/common');
const LOG_CATEGORY = 'ClientResourcesController';

/**
 * This function is to fetch Client Resources
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @param {function} next callback function
 */
const fetchClientResources = async (req, res, next) => {
    const logMethod = 'fetchClientResources';
    try {
        logger.info(util.format('<-%s::%s', LOG_CATEGORY, logMethod));
        const result = await clientResourcesSRVC.fetchClientResources();
        commonUtils.okResponseHandler(result, req, res, next);
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        next(err);
    }
};

/**
 * This function is to insert Client Resources
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @param {function} next callback function
 */
const insertClientResources = async (req, res, next) => {
    const logMethod = 'insertClientResources';
    try {
        logger.info(util.format('<-%s::%s', LOG_CATEGORY, logMethod));
        const result = await clientResourcesSRVC.insertClientResources(req, res, next);
        commonUtils.okResponseHandler(result, req, res, next);
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        next(err);
    }
};
module.exports = {
    fetchClientResources: fetchClientResources,
    insertClientResources: insertClientResources
};
