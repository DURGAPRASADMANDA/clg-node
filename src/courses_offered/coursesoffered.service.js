const util = require('util');
const LOG_CATEGORY = 'CoursesOfferedService';
const CoursesOffered = require('../../models/coursesoffered.model');
const fetchCoursesOffered = async () => {
    const logMethod = 'fetchCoursesOffered';
    try {
        logger.info(util.format('%s::%s->', LOG_CATEGORY, logMethod));
        return await CoursesOffered.find();
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        throw err;
    }
};
const insertCoursesOffered = async (req, res, next) => {
    const logMethod = 'insertCoursesOffered';
    try {
        logger.info(util.format('%s::%s->', LOG_CATEGORY, logMethod));
        const obj = new CoursesOffered(req.body);
        return await obj.save();
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        throw err;
    }
};
module.exports = {
    fetchCoursesOffered: fetchCoursesOffered,
    insertCoursesOffered: insertCoursesOffered
};
