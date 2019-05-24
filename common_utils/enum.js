const DELETED = {
    STATUS_NO: 'N',
    STATUS_YES: 'Y'
};
const BOOLEAN = {
    NO: 'N',
    YES: 'Y'
};
const TABLE = {
    EXAM_PATTERNS: 'ExamPatterns',
    LOOKUPS: 'Lookups',
    ROLE_RIGHTS: 'RoleRights',
    COURSES_OFFERED: 'CoursesOffered',
    CLIENT: 'Client',
    BRANCHES: 'Branches',
    SPECIALITY: 'Speciality',
    SPECIFICATIONS: 'Specifications',
    ABOUT_US: 'AboutUs',
    CLIENT_RESOURCE: 'ClientResources',
    USERS: 'Users',
    EXAM_MODULES: 'ExamModules',
    QUESTIONS: 'Questions'
};
const DB_OPTIONS = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
};
module.exports = {
    DELETED: DELETED,
    BOOLEAN: BOOLEAN,
    TABLE: TABLE,
    DB_OPTIONS: DB_OPTIONS
};
