// Import required modules
const express = require('express');
const router = new express.Router();
const lookupsCTRL = require('./lookups.controller');
// URLs
const routes = () => {
    router.route('/api/lookups/:ltName')
        .get(lookupsCTRL.fetchLookups);
    router.route('/api/lookups')
        .post(lookupsCTRL.insertLookups);
    return router;
};

module.exports = routes;
