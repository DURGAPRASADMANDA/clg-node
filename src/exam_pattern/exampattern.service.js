const util = require('util');
const LOG_CATEGORY = 'ExamPatternService';
const ExamPattern = require('../../models/exampattern.model');
const ExamModules = require('../../models/exammodule.model');
const fetchExmPtrns = async () => {
    const logMethod = 'fetchExmPtrns';
    try {
        logger.info(util.format('%s::%s->', LOG_CATEGORY, logMethod));
        return await ExamPattern.aggregate([{
            $lookup: {
                from: 'exammodules', // collection name in db
                localField: '_id',
                foreignField: 'exam.examId',
                as: 'examModule'
            }
        }]).exec();
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        throw err;
    }
};
const fetchExmModules = async () => {
    const logMethod = 'fetchExmModules';
    try {
        logger.info(util.format('%s::%s->', LOG_CATEGORY, logMethod));
        return await ExamModules.find().populate('exam.examId').exec();
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        throw err;
    }
};
const insertExmPtrns = async (req, res, next) => {
    const logMethod = 'insertExmPtrns';
    try {
        logger.info(util.format('%s::%s->', LOG_CATEGORY, logMethod));
        const obj = new ExamPattern(req.body);
        return await obj.save();
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        throw err;
    }
};
const insertExmModules = async (req, res, next) => {
    const logMethod = 'insertExmModules';
    try {
        logger.info(util.format('%s::%s->', LOG_CATEGORY, logMethod));
        const obj = new ExamModules(req.body);
        return await obj.save();
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        throw err;
    }
};

const deleteExmPtrns = async (req, res, next) => {
    const logMethod = 'deleteExmPtrns';
    try {
        logger.info(util.format('%s::%s->', LOG_CATEGORY, logMethod));
        return await ExamPattern.findByIdAndRemove(req.query.id);
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        throw err;
    }
};
const deleteExmModules = async (req, res, next) => {
    const logMethod = 'deleteExmModules';
    try {
        logger.info(util.format('%s::%s->', LOG_CATEGORY, logMethod));
        return await ExamModules.findByIdAndRemove(req.query.id);
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        throw err;
    }
};
const dropExamsCollections = async (req, res, next) => {
    const logMethod = 'dropExamsCollections';
    try {
        logger.info(util.format('%s::%s->', LOG_CATEGORY, logMethod));
        if (req.query.collection === 'ExamPattern') {
            return await ExamPattern.remove();
        } else if (req.query.collection === 'ExamModule') {
            return await ExamModules.remove();
        } else {
            return 'No collection specified';
        }
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        throw err;
    }
};
module.exports = {
    fetchExmPtrns: fetchExmPtrns,
    fetchExmModules: fetchExmModules,
    insertExmPtrns: insertExmPtrns,
    insertExmModules: insertExmModules,
    deleteExmModules: deleteExmModules,
    deleteExmPtrns: deleteExmPtrns,
    dropExamsCollections: dropExamsCollections
};
