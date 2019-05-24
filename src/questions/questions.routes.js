// Import required modules
const express = require('express');
const router = new express.Router();
const questionsCTRL = require('./questions.controller');
// URLs
const routes = () => {
    router.route('/api/questions')
        .get(questionsCTRL.fetchQuestions)
        .post(questionsCTRL.insertQuestions);
    return router;
};

module.exports = routes;
