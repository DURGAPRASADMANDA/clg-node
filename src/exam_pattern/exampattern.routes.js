// Import required modules
const express = require('express');
const router = new express.Router();
const exmPtrnCTRL = require('./exampattern.controller');
// URLs
const routes = () => {
    router.route('/api/exampattern')
        .get(exmPtrnCTRL.fetchExmPtrns)
        .post(exmPtrnCTRL.insertExmPtrns)
        .delete(exmPtrnCTRL.deleteExmPtrns);
    router.route('/api/exammodules')
        .get(exmPtrnCTRL.fetchExmModules)
        .post(exmPtrnCTRL.insertExmModules)
        .delete(exmPtrnCTRL.deleteExmModules);
    router.route('/api/exam/drop')
        .delete(exmPtrnCTRL.dropExamsCollections);
    return router;
};

module.exports = routes;
