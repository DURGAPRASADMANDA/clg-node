// Import required modules
const util = require('util');
const clientsSRVC = require('./client.service');
const commonUtils = require('../../common_utils/common');
const LOG_CATEGORY = 'ClientsController';

/**
 * This function is to fetch Clients
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @param {function} next callback function
 */
const fetchClients = async (req, res, next) => {
    const logMethod = 'fetchClients';
    try {
        logger.info(util.format('<-%s::%s', LOG_CATEGORY, logMethod));
        const result = await clientsSRVC.fetchClients();
        commonUtils.okResponseHandler(result, req, res, next);
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        next(err);
    }
};

/**
 * This function is to insert Clients
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @param {function} next callback function
 */
const insertClients = async (req, res, next) => {
    const logMethod = 'insertClients';
    try {
        logger.info(util.format('<-%s::%s', LOG_CATEGORY, logMethod));
        const result = await clientsSRVC.insertClients(req, res, next);
        commonUtils.okResponseHandler(result, req, res, next);
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        next(err);
    }
};
module.exports = {
    fetchClients: fetchClients,
    insertClients: insertClients
};
