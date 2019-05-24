// Import required modules
const express = require('express');
const router = new express.Router();
const usersCTRL = require('./users.controller');
// URLs
const routes = () => {
    router.route('/api/users')
        .get(usersCTRL.fetchUsers)
        .post(usersCTRL.insertUsers);
    return router;
};

module.exports = routes;
