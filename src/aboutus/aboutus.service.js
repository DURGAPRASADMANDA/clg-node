const util = require('util');
const LOG_CATEGORY = 'AboutUsService';
const AboutUs = require('../../models/aboutus.model');
const fetchAboutUs = async () => {
    const logMethod = 'fetchAboutUs';
    try {
        logger.info(util.format('%s::%s->', LOG_CATEGORY, logMethod));
        return await AboutUs.find();
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        throw err;
    }
};
const insertAboutUs = async (req, res, next) => {
    const logMethod = 'insertAboutUs';
    try {
        logger.info(util.format('%s::%s->', LOG_CATEGORY, logMethod));
        const obj = new AboutUs(req.body);
        return await obj.save();
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        throw err;
    }
};
module.exports = {
    fetchAboutUs: fetchAboutUs,
    insertAboutUs: insertAboutUs
};
