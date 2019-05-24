// Import required modules
const util = require('util');
const branchesSRVC = require('./branches.service');
const commonUtils = require('../../common_utils/common');
const LOG_CATEGORY = 'BranchesControler';

/**
 * This function is to insert Branches
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @param {function} next callback function
 */
const fetchBranches = async (req, res, next) => {
    const logMethod = 'fetchBranches';
    try {
        logger.info(util.format('<-%s::%s', LOG_CATEGORY, logMethod));
        const result = await branchesSRVC.fetchBranches();
        commonUtils.okResponseHandler(result, req, res, next);
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        next(err);
    }
};

/**
 * This function is to insert Branches
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @param {function} next callback function
 */
const insertBranches = async (req, res, next) => {
    const logMethod = 'insertBranches';
    try {
        logger.info(util.format('<-%s::%s', LOG_CATEGORY, logMethod));
        const result = await branchesSRVC.insertBranches(req, res, next);
        commonUtils.okResponseHandler(result, req, res, next);
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        next(err);
    }
};
module.exports = {
    fetchBranches: fetchBranches,
    insertBranches: insertBranches
};
