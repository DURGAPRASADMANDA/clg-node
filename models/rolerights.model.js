const mongoose = require('mongoose');
const enums = require('../common_utils/enum');
const cfg = require('config');
mongoose.connect(cfg.mongoURI, enums.DB_OPTIONS);

// create a schema
const RoleRightsSchema = new mongoose.Schema({
    client: {
        clientName: { type: String, required: true, unique: true },
        clientId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: enums.TABLE.CLIENT, index: true }
    },
    roleName: { type: String, unique: true, required: true, trim: true },
    roleDisplayName: { type: String, unique: true, required: true, trim: true },
    client: {
        viewRights: { type: Boolean, default: false },
        addRights: { type: Boolean, default: false },
        editRights: { type: Boolean, default: false },
        deleteRights: { type: Boolean, default: false },
        listRights: { type: Boolean, default: false },
        exportRights: { type: Boolean, default: false },
        activateRights: { type: Boolean, default: false },
        inactivateRights: { type: Boolean, default: false },
        locateRights: { type: Boolean, default: false }
    },
    users: {
        viewRights: { type: Boolean, default: false },
        addRights: { type: Boolean, default: false },
        editRights: { type: Boolean, default: false },
        deleteRights: { type: Boolean, default: false },
        listRights: { type: Boolean, default: false },
        importRights: { type: Boolean, default: false },
        exportRights: { type: Boolean, default: false },
        blockRights: { type: Boolean, default: false },
        unblockRights: { type: Boolean, default: false },
        locateRights: { type: Boolean, default: false }
    },
    loginHistory: {
        viewRights: { type: Boolean, default: false },
        deleteRights: { type: Boolean, default: false },
        listRights: { type: Boolean, default: false },
        exportRights: { type: Boolean, default: false }
    },
    roleRights: {
        viewRights: { type: Boolean, default: false },
        addRights: { type: Boolean, default: false },
        editRights: { type: Boolean, default: false },
        deleteRights: { type: Boolean, default: false },
        renameRights: { type: Boolean, default: false }
    },
    lookups: {
        viewRights: { type: Boolean, default: false },
        addRights: { type: Boolean, default: false },
        editRights: { type: Boolean, default: false },
        deleteRights: { type: Boolean, default: false },
        listRights: { type: Boolean, default: false },
        exportRights: { type: Boolean, default: false }
    },
    feedback: {
        addRights: { type: Boolean, default: false },
        deleteRights: { type: Boolean, default: false },
        editRights: { type: Boolean, default: false },
        exportRights: { type: Boolean, default: false },
        listRights: { type: Boolean, default: false },
        viewRights: { type: Boolean, default: false }
    },
    help: {
        addRights: { type: Boolean, default: false },
        deleteRights: { type: Boolean, default: false },
        editRights: { type: Boolean, default: false },
        exportRights: { type: Boolean, default: false },
        listRights: { type: Boolean, default: false },
        viewRights: { type: Boolean, default: false }
    },
    notifications: {
        viewRights: { type: Boolean, default: false },
        readRights: { type: Boolean, default: false },
        deleteRights: { type: Boolean, default: false },
        listRights: { type: Boolean, default: false },
        unreadRights: { type: Boolean, default: false },
        exportRights: { type: Boolean, default: false }
    },
    notes: { type: String, required: false, trim: true },
    enableFlag: { type: Boolean, default: true },
    deletedFlag: { type: Boolean, default: false },
    createdBy: { type: String, required: true, trim: true },
    createdAt: { type: Date, required: true, default: new Date().toLocaleString() },
    updatedBy: { type: String, required: true, trim: true },
    updatedAt: { type: Date, required: true, default: new Date().toLocaleString() }
});

// create the model for LookupCodes and expose it to our app
module.exports = mongoose.model(enums.TABLE.ROLE_RIGHTS, RoleRightsSchema);
