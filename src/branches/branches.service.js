const util = require('util');
const LOG_CATEGORY = 'BranchesService';
const Branches = require('../../models/branches.model');

const fetchBranches = async () => {
    const logMethod = 'fetchBranches';
    try {
        logger.info(util.format('%s::%s->', LOG_CATEGORY, logMethod));
        return await Branches.find();
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        throw err;
    }
};
const insertBranches = async (req, res, next) => {
    const logMethod = 'insertBranches';
    try {
        logger.info(util.format('%s::%s->', LOG_CATEGORY, logMethod));
        const obj = new Branches(req.body);
        return await obj.save();
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        throw err;
    }
};
module.exports = {
    fetchBranches: fetchBranches,
    insertBranches: insertBranches
};
