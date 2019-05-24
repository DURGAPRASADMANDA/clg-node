// Import required modules
const express = require('express');
const router = new express.Router();
const clientCTRL = require('./client.controller');
// URLs
const routes = () => {
    router.route('/api/client')
        .get(clientCTRL.fetchClients)
        .post(clientCTRL.insertClients);
    return router;
};

module.exports = routes;
