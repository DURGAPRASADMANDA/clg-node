const mongoose = require('mongoose');
const enums = require('../common_utils/enum');
const cfg = require('config');
mongoose.connect(cfg.mongoURI, enums.DB_OPTIONS);

const BranchesSchema = new mongoose.Schema({
    client: {
        clientName: { type: String, required: true, unique: true },
        clientId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: enums.TABLE.CLIENT, index: true }
    },
    branchName: { type: String },
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
    enableFlag: { type: Boolean, default: true },
    deletedFlag: { type: Boolean, default: false },
    createdBy: { type: String, required: true, trim: true },
    createdAt: { type: Date, required: true, default: new Date().toLocaleString() },
    updatedBy: { type: String, required: true, trim: true },
    updatedAt: { type: Date, required: true, default: new Date().toLocaleString() }
});
module.exports = mongoose.model(enums.TABLE.BRANCHES, BranchesSchema);
