const util = require('util');
const LOG_CATEGORY = 'ClientsService';
const Clients = require('../../models/client.model');
const fetchClients = async () => {
    const logMethod = 'fetchClients';
    try {
        logger.info(util.format('%s::%s->', LOG_CATEGORY, logMethod));
        return await Clients.find();
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        throw err;
    }
};
const insertClients = async (req, res, next) => {
    const logMethod = 'insertClients';
    try {
        logger.info(util.format('%s::%s->', LOG_CATEGORY, logMethod));
        const obj = new Clients(req.body);
        return await obj.save();
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        throw err;
    }
};
module.exports = {
    fetchClients: fetchClients,
    insertClients: insertClients
};
