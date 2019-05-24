const util = require('util');
const LOG_CATEGORY = 'LookupsService';
const Lookups = require('../../models/lookups.model');

const fetchLookups = async (ltName) => {
    const logMethod = 'fetchLookups';
    try {
        logger.info(util.format('%s::%s->', LOG_CATEGORY, logMethod));
        return await Lookups.find({ 'lookupTypeName': ltName });
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        next(err);
    }
};
const insertLookups = async (req, res, next) => {
    const logMethod = 'insertLookups';
    try {
        logger.info(util.format('%s::%s->', LOG_CATEGORY, logMethod));
        const obj = new Lookups(req.body);
        return await obj.save();
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        next(err);
    }
};
module.exports = {
    fetchLookups: fetchLookups,
    insertLookups: insertLookups
};
