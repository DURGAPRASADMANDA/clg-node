// Importing the required modules
const jwt = require('jwt-simple');
const cfg = require('config');
const moment = require('moment');
const crypto = require('crypto');
const HTTP_STATUS = require('http-status');
const LOG_CATEGORY = 'common.Js';
const util = require('util');
const _ = require('lodash');
const uuid = require('uuid');

/**
 * Token Generation Code.
 * @param {Object} res response object.
 * @param {Object} userObj user details object.
 */
const authorization = async (res, userObj) => {
    const logMethod = 'authorization';
    try {
        logger.info(util.format('%s::%s->', LOG_CATEGORY, logMethod));
        const expires = moment().add(cfg.logUserExpireTime, cfg.logUserExpireType).valueOf();
        const Authorization = await jwt.encode({
            userId: userObj.userId,
            email: userObj.email,
            phone: userObj.phoneNum,
            firstName: userObj.firstName,
            lastName: userObj.lastName,
            username: userObj.userName,
            uuid: uuid.v1(),
            exp: expires
        }, cfg.jwtSecret);
        res.header('Authorization', 'Bearer ' + Authorization);
        return 'Bearer ' + Authorization;
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        throw err;
    }
};
/**
 * Salt Generation Code.
 * @param {number} length of salt for password encryption.
 */
const saltGeneration = async (length) => {
    const logMethod = 'saltGeneration';
    try {
        logger.info(util.format('%s::%s->', LOG_CATEGORY, logMethod));
        return await crypto.randomBytes(Math.ceil(length / 2))
            .toString('hex') // convert to hexadecimal format
            .slice(0, length); // return required number of characters
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        return cfg.defaultSalt;
    }
};

/**
 * Pasword Encryption Code.
 * @param {String} password for encryption.
 * @param {String} salt for encryption.
 */
const passwordEncryption = async (password, salt) => {
    const logMethod = 'passwordEncryption';
    try {
        logger.info(util.format('%s::%s->', LOG_CATEGORY, logMethod));
        const hash = crypto.createHmac('sha512', salt); // Hashing algorithm sha512
        hash.update(password);
        return {
            salt: salt,
            passwordHash: hash.digest('hex')
        };
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        throw err;
    }
};
/**
 * This function is to Validate, Update and set token in headers
 * @param {Object} req is an object
 * @param {String} res is an object
 * @param {function} next is a callback function
 */
const refreshAuthorization = async (req, res, next) => {
    const logMethod = 'refreshAuthorization';
    logger.info(util.format('%s::%s->', LOG_CATEGORY, logMethod));
    try {
        const originalUrl = req.originalUrl;
        if (originalUrl.includes('/login') || originalUrl.includes('/signup')) {
            return;
        }
        const token = req.headers.authorization;
        if (!token || _.isEmpty(token)) {
            const msg = 'Authorization token is required';
            logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(msg)));
            throw new Error(msg);
        }
        const curTime = moment().valueOf();
        const expires = moment().add(cfg.logUserExpireTime, cfg.logUserExpireType).valueOf();
        const decodedData = await jwt.decode(token.split(' ')[1], cfg.jwtSecret);
        process.elevateUserContext = {
            'id': decodedData.userId,
            'firstName': decodedData.firstName,
            'lastName': decodedData.lastName,
            'version': '1.0',
            'transactionId': uuid.v1()
        };
        if (decodedData.exp >= curTime) {
            decodedData.expStatus = false;
            const Authorization = await jwt.encode({
                userId: decodedData.userId,
                email: decodedData.email,
                phone: decodedData.phone,
                firstName: decodedData.firstName,
                lastName: decodedData.lastName,
                username: decodedData.username,
                exp: expires
            }, cfg.jwtSecret);
            res.newToken = 'Bearer ' + Authorization;
            req.newHeader = decodedData;
        } else {
            throw new Error('Token is invalid.');
        }
        next();
    } catch (err) {
        logger.error(util.format('%s::%s: err:%s', LOG_CATEGORY, logMethod, util.inspect(err)));
        err.message != 'undefined' ? err.message : 'Invalid token .';
        next(err);
    }
};

const okResponseHandler = (result, req, res, next) => {
    try {
        addCommonResponseHeaders(req, res);
        res.status(HTTP_STATUS.OK);
        res.json(result);
        res.end();

        // if (!string(req.originalUrl.toLowerCase()).endsWith('/statuscheck')) {
        //     // if (process) {
        //     //     logger.info('Ok Response handler completed, statusCode:' + res.statusCode);
        //     // }
        // }
    } catch (err) {
        next(err);
    }
};

const addCommonResponseHeaders = (req, res) => {
    if (!res) return;
    // modify common response headers..
    res.removeHeader('X-Powered-By');
    // server reponse should always be no cache
    res.setHeader('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.setHeader('Expires', '-1');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Powered-By', 'Elevate');
};

/**
 * Exporting the modules
 */
module.exports = {
    authorization: authorization,
    saltGeneration: saltGeneration,
    passwordEncryption: passwordEncryption,
    refreshAuthorization: refreshAuthorization,
    okResponseHandler: okResponseHandler
};
