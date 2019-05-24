// Import required modules
const express = require('express');
const router = new express.Router();
const branchesCTRL = require('./branches.controller');
// URLs
const routes = () => {
    router.route('/api/branches')
        .get(branchesCTRL.fetchBranches)
        .post(branchesCTRL.insertBranches);
    return router;
};

module.exports = routes;
