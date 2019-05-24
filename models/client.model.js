const mongoose = require('mongoose');
const enums = require('../common_utils/enum');
const cfg = require('config');
mongoose.connect(cfg.mongoURI, enums.DB_OPTIONS);

const ClientSchema = new mongoose.Schema({
    clientName: { type: String, required: true, unique: true, trim: true, minlength: 3, maxlength: 15 },
    description: { type: String, required: false, trim: true, maxlength: 250 },
    address: {
        addressLine1: { type: String, required: true, trim: true },
        addressLine2: { type: String, required: false, trim: true },
        city: { type: String, required: true, trim: true },
        state: { type: String, required: true, trim: true },
        ZIP: { type: String, required: true, trim: true },
        country: { type: String, required: true, trim: true },
        geoCoordinates: { type: [String], trim: true } // [<longitude>, <latitude>]
    },
    contactDetails: {
        email: { type: String, required: true, trim: true },
        workNumberCountrycode: { type: String, required: true, trim: true },
        workNumber: { type: String, required: true, trim: true },
        mobile: { type: String, required: true, trim: true }
    },
    meta: {
        websiteURL: { type: String, required: false, trim: true },
        mediaFilesPath: { type: String, required: false, trim: true }
    },
    clientIcon: { type: String, required: true, trim: true },
    clientIconFilePath: { type: String, required: true, trim: true },
    reasonActivate: { type: String, required: false, trim: true },
    reasonInactivate: { type: String, required: false, trim: true },
    enableFlag: { type: Boolean, default: true },
    deletedFlag: { type: Boolean, default: false },
    createdBy: { type: String, required: true, trim: true },
    createdAt: { type: Date, required: true, default: new Date().toLocaleString() },
    updatedBy: { type: String, required: true, trim: true },
    updatedAt: { type: Date, required: true, default: new Date().toLocaleString() }
});

module.exports = mongoose.model(enums.TABLE.CLIENT, ClientSchema);
