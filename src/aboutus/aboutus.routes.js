// Import required modules
const express = require('express');
const router = new express.Router();
const AboutUsCTRL = require('./aboutus.controller');
// URLs
const routes = () => {
    router.route('/api/aboutus')
        .get(AboutUsCTRL.fetchAboutUs)
        .post(AboutUsCTRL.insertAboutUs);
    return router;
};

module.exports = routes;
