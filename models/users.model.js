const mongoose = require('mongoose');
const enums = require('../common_utils/enum');
const cfg = require('config');
mongoose.connect(cfg.mongoURI, enums.DB_OPTIONS);
const oId = mongoose.Schema.Types.ObjectId;

// define the schema for user model
const UserSchema = new mongoose.Schema({
    client: {
        clientName: { type: String, required: true, unique: true },
        clientId: { type: oId, required: true, ref: enums.TABLE.CLIENT, index: true }
    },
    clientResourceObj: { type: oId, required: true, unique: true, ref: enums.TABLE.CLIENT_RESOURCE },
    userAccount: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: false },
    salt: { type: String, required: false },
    loginKey: { type: String, required: false, trim: true }, // This field is used for user 1st time login token validation
    otp: { type: String, required: false, trim: true },
    userRole: { type: String, required: true, trim: true },
    reasonBlock: { type: String, required: false, trim: true },
    reasonUnblock: { type: String, required: false, trim: true },
    enableFlag: { type: Boolean, default: true },
    deletedFlag: { type: Boolean, default: false },
    createdBy: { type: String, required: true, trim: true },
    createdAt: { type: Date, required: true, default: new Date().toLocaleString() },
    updatedBy: { type: String, required: true, trim: true },
    updatedAt: { type: Date, required: true, default: new Date().toLocaleString() }
});

module.exports = mongoose.model(enums.TABLE.USERS, UserSchema);
