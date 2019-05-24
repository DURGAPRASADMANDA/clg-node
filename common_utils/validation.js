// Importing the required modules
const Q = require('q');
const msg = require('../common_utils/msg');
/**
 * Not null validation.
 * @param {Object} fld fieldname.
 * @param {Object} value value.
 * @return {promise} return promise object
*/
const isRequired = (fld, value) => {
    const deferred = Q.defer();
    const Obj = { [fld]: msg.v_txt[0][fld] + ' ' + msg.v_typ[0].Empty };
    try {
        value = value.toString();
    } catch (err) {
        deferred.reject(Obj);
    }
    if ((value == '') || (value == ' ') || (value == null) ||
        (value == undefined) || (value.replace(/\s/g, '').length == 0)) {
        deferred.reject(Obj);
    } else {
        deferred.resolve();
    } // true
    return deferred.promise;
};

/**
 * Exporting the modules
 */
module.exports = {
    isRequired: isRequired
};
