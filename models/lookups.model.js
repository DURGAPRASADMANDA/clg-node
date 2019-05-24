const mongoose = require('mongoose');
const enums = require('../common_utils/enum');
const cfg = require('config');
mongoose.connect(cfg.mongoURI, enums.DB_OPTIONS);

const LookupsSchema = new mongoose.Schema({
    client: {
        clientName: { type: String, required: true, unique: true },
        clientId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: enums.TABLE.CLIENT, index: true }
    },
    lookupTypeName: { type: String, required: true, index: true, trim: true },
    lookupName: { type: String, required: true, index: true, trim: true },
    description: { type: String, required: true, trim: true },
    enableFlag: { type: Boolean, default: true },
    deletedFlag: { type: Boolean, default: false },
    createdBy: { type: String, required: true, trim: true },
    createdAt: { type: Date, required: true, default: new Date().toLocaleString() },
    updatedBy: { type: String, required: true, trim: true },
    updatedAt: { type: Date, required: true, default: new Date().toLocaleString() }
});
// create the model for LookupCodes and expose it to our app
module.exports = mongoose.model(enums.TABLE.LOOKUPS, LookupsSchema);
