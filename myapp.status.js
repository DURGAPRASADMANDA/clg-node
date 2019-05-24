// Import required modules
const express = require('express');
const router = new express.Router();
// URLs
const routes = () => {
    router.route('/status')
        .get((req, res) => {
            res.render('status', { title: 'myapp node server is running...' });
        });
    router.route('/')
        .get((req, res) => {
            res.render('index', { title: 'Node JS web APIs for myapp' });
        });
    router.route('/config')
        .get((req, res) => {
            res.render('status', { title: 'CPU: Test & Memory: Test' });
        });
    router.route('/upload')
        .get((req, res) => {
            res.render('upload', { title: 'Upload images' });
        });

    return router;
};

module.exports = routes;
