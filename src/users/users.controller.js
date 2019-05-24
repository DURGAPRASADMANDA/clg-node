// Import required modules
const util = require('util');
const usersSRVC = require('./users.service');
const commonUtils = require('../../common_utils/common');
const LOG_CATEGORY = 'UsersController';

/**
 * This function is to fetch Users
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @param {function} next callback function
 */
const fetchUsers = async (req, res, next) => {
    const logMethod = 'fetchUsers';
    try {
        logger.info(util.format('<-%s::%s', LOG_CATEGORY, logMethod));
        const result = await usersSRVC.fetchUsers();
        commonUtils.okResponseHandler(result, req, res, next);
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        next(err);
    }
};

/**
 * This function is to insert Users
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @param {function} next callback function
 */
const insertUsers = async (req, res, next) => {
    const logMethod = 'insertUsers';
    try {
        logger.info(util.format('<-%s::%s', LOG_CATEGORY, logMethod));
        const result = await usersSRVC.insertUsers(req, res, next);
        commonUtils.okResponseHandler(result, req, res, next);
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        next(err);
    }
};
module.exports = {
    fetchUsers: fetchUsers,
    insertUsers: insertUsers
};
