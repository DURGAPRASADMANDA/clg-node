// Import required modules
process.env.NODE_ENV = 'dev';
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const elevateLogger = require('npm-elevate-logger');
const cors = require('cors');
const moment = require('moment');
const app = express();
app.use(cors());
global.logger = elevateLogger.createLogger({
    doLogging: true,
    logFileName: 'elevateLogs-' + moment().format('YYYY-MM-DD')
});

process.on('uncaughtException', (e) => {
    logger.error('uncaught Exception: ' + e.stack);
});
if (!process.env.NODE_ENV) {
    logger.error('NODE_ENV Environment variable is not defined');
    throw new Error('NODE_ENV is required');
}
global.__base = __dirname + '/';

// Importing modules
const statueRouter = require('./myapp.status');
const clientsRouter = require('./src/clients/client.routes');
const aboutUsRouter = require('./src/aboutus/aboutus.routes');
const coursesOfferedRouter = require('./src/courses_offered/coursesoffered.routes');
const branchesRouter = require('./src/branches/branches.routes');
const examPatternRouter = require('./src/exam_pattern/exampattern.routes');
const questionsRouter = require('./src/questions/questions.routes');
const lookupsRouter = require('./src/lookups/lookups.routes');
// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
// ---Start of code for Swagger --- //
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// ---End of code for Swagger ---//

// Initialize body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// app.use(morgan('combined', { stream: winston.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Elevate API routes
app.use(clientsRouter());
app.use(aboutUsRouter());
app.use(coursesOfferedRouter());
app.use(branchesRouter());
app.use(examPatternRouter());
app.use(statueRouter());
app.use(lookupsRouter());
app.use(questionsRouter());

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'dev' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
