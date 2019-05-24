// Import required modules
const util = require('util');
const exmPtrnSRVC = require('./exampattern.service');
const commonUtils = require('../../common_utils/common');
const LOG_CATEGORY = 'ExamPatternControler';

/**
 * This function is to fetch Exam Patterns
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @param {function} next callback function
 */
const fetchExmPtrns = async (req, res, next) => {
    const logMethod = 'fetchExmPtrns';
    try {
        logger.info(util.format('<-%s::%s', LOG_CATEGORY, logMethod));
        const result = await exmPtrnSRVC.fetchExmPtrns();
        commonUtils.okResponseHandler(result, req, res, next);
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        next(err);
    }
};
/**
 * This function is to fetch Exam details
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @param {function} next callback function
 */
const fetchExmModules = async (req, res, next) => {
    const logMethod = 'fetchExmModules';
    try {
        logger.info(util.format('<-%s::%s', LOG_CATEGORY, logMethod));
        const result = await exmPtrnSRVC.fetchExmModules();
        commonUtils.okResponseHandler(result, req, res, next);
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        next(err);
    }
};
/**
 * This function is to insert Exam Patterns
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @param {function} next callback function
 */
const insertExmPtrns = async (req, res, next) => {
    const logMethod = 'insertExmPtrns';
    try {
        logger.info(util.format('<-%s::%s', LOG_CATEGORY, logMethod));
        const result = await exmPtrnSRVC.insertExmPtrns(req, res, next);
        commonUtils.okResponseHandler(result, req, res, next);
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        next(err);
    }
};
/**
 * This function is to insert Exam details
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @param {function} next callback function
 */
const insertExmModules = async (req, res, next) => {
    const logMethod = 'insertExamModules';
    try {
        logger.info(util.format('<-%s::%s', LOG_CATEGORY, logMethod));
        const result = await exmPtrnSRVC.insertExmModules(req, res, next);
        commonUtils.okResponseHandler(result, req, res, next);
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        next(err);
    }
};
const deleteExmModules = async (req, res, next) => {
    const logMethod = 'deleteExmModules';
    try {
        logger.info(util.format('<-%s::%s', LOG_CATEGORY, logMethod));
        const result = await exmPtrnSRVC.deleteExmModules(req, res, next);
        commonUtils.okResponseHandler(result, req, res, next);
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        next(err);
    }
};
const deleteExmPtrns = async (req, res, next) => {
    const logMethod = 'deleteExmPtrns';
    try {
        logger.info(util.format('<-%s::%s', LOG_CATEGORY, logMethod));
        const result = await exmPtrnSRVC.deleteExmPtrns(req, res, next);
        commonUtils.okResponseHandler(result, req, res, next);
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        next(err);
    }
};
const dropExamsCollections = async (req, res, next) => {
    const logMethod = 'dropExamsCollections';
    try {
        logger.info(util.format('<-%s::%s', LOG_CATEGORY, logMethod));
        const result = await exmPtrnSRVC.dropExamsCollections(req, res, next);
        commonUtils.okResponseHandler(result, req, res, next);
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        next(err);
    }
};
module.exports = {
    fetchExmPtrns: fetchExmPtrns,
    insertExmPtrns: insertExmPtrns,
    deleteExmPtrns: deleteExmPtrns,
    fetchExmModules: fetchExmModules,
    insertExmModules: insertExmModules,
    deleteExmModules: deleteExmModules,
    dropExamsCollections: dropExamsCollections
};
