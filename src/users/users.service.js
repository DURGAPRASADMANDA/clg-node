const util = require('util');
const LOG_CATEGORY = 'UsersService';
const Users = require('../../models/users.model');

const fetchUsers = async () => {
    const logMethod = 'fetchUsers';
    try {
        logger.info(util.format('%s::%s->', LOG_CATEGORY, logMethod));
        return await Users.find();
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        throw err;
    }
};
const insertUsers = async (req, res, next) => {
    const logMethod = 'insertUsers';
    try {
        logger.info(util.format('%s::%s->', LOG_CATEGORY, logMethod));
        const obj = new Users(req.body);
        return await obj.save();
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        throw err;
    }
};
module.exports = {
    fetchUsers: fetchUsers,
    insertUsers: insertUsers
};
