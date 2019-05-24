// Import required modules
const express = require('express');
const router = new express.Router();
const clientResourcesCTRL = require('./clientresources.controller');
// URLs
const routes = () => {
    router.route('/api/clientResources')
        .get(clientResourcesCTRL.fetchClientResources)
        .post(clientResourcesCTRL.insertClientResources);
    return router;
};

module.exports = routes;
