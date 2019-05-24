// Import required modules
const express = require('express');
const router = new express.Router();
const coursesOfferedCTRL = require('./coursesoffered.controller');
// URLs
const routes = () => {
    router.route('/api/courses/offered')
        .get(coursesOfferedCTRL.fetchCoursesOffered)
        .post(coursesOfferedCTRL.insertCoursesOffered);
    return router;
};

module.exports = routes;
