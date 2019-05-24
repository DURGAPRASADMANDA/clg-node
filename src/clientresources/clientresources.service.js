const util = require('util');
const LOG_CATEGORY = 'ClientResourcesService';
const ClientResources = require('../../models/clientresource.model');
const fetchClientResources = async () => {
    const logMethod = 'fetchClientResources';
    try {
        logger.info(util.format('%s::%s->', LOG_CATEGORY, logMethod));
        return await ClientResources.find();
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        throw err;
    }
};
const insertClientResources = async (req, res, next) => {
    const logMethod = 'insertClientResources';
    try {
        logger.info(util.format('%s::%s->', LOG_CATEGORY, logMethod));
        const obj = new ClientResources(req.body);
        return await obj.save();
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        throw err;
    }
};
module.exports = {
    fetchClientResources: fetchClientResources,
    insertClientResources: insertClientResources
};
