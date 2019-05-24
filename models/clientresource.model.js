const mongoose = require('mongoose');
const enums = require('../common_utils/enum');
const cfg = require('config');
mongoose.connect(cfg.mongoURI, enums.DB_OPTIONS);

// define the schema for client resource model
const ClientResourceSchema = new mongoose.Schema({
    client: {
        clientName: { type: String, required: true, unique: true },
        clientId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: enums.TABLE.CLIENT, index: true }
    },
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    userAccount: { type: String, required: false, trim: true },
    resourceType: { type: String, required: true, trim: true }, // List - Permanent/Contract - System Owned
    department: { type: String, required: true, trim: true }, // Departments List - Application Specific
    designation: { type: String, required: true, trim: true },
    gender: { type: String, required: true, trim: true },
    clientResourcesImageFilePath: { type: String, required: true, trim: true }, // user media file name ex: example.jpeg, example.mp4
    clientResourcesImageFileName: { type: String, required: false, default: null, trim: true }, // user media file storage location path
    supervisorEmail: { type: String, required: false, trim: true },
    qualification: { type: String, required: false, trim: true },
    address: {
        addressLine1: { type: String, required: true, trim: true },
        addressLine2: { type: String, required: false, trim: true },
        city: { type: String, required: true, trim: true },
        state: { type: String, required: true, trim: true },
        ZIP: { type: String, required: true, trim: true },
        country: { type: String, required: true, trim: true }
    },
    contactDetails: {
        workNumberCountrycode: { type: String, required: false, trim: true },
        workNumber: { type: String, required: false, trim: true },
        mobileNumberCountrycode: { type: String, required: true, trim: true },
        mobileNumber: { type: String, required: true, trim: true },
        email: { type: String, required: true, unique: true, trim: true }
    },
    reasonBlock: { type: String, required: false, trim: true },
    reasonUnblock: { type: String, required: false, trim: true },
    notes: { type: String, required: false, trim: true },
    enableFlag: { type: Boolean, default: true },
    deletedFlag: { type: Boolean, default: false },
    createdBy: { type: String, required: true, trim: true },
    createdAt: { type: Date, required: true, default: new Date().toLocaleString() },
    updatedBy: { type: String, required: true, trim: true },
    updatedAt: { type: Date, required: true, default: new Date().toLocaleString() }
});

module.exports = mongoose.model(enums.TABLE.CLIENT_RESOURCE, ClientResourceSchema);
