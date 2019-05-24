const mongoose = require('mongoose');
const enums = require('../common_utils/enum');
const cfg = require('config');
mongoose.connect(cfg.mongoURI, enums.DB_OPTIONS);

const AboutUsSchema = new mongoose.Schema({
    client: {
        clientName: { type: String, required: true, unique: true },
        clientId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: enums.TABLE.CLIENT, index: true }
    },
    aboutUsContent: { type: String, required: true, trim: true },
    enableFlag: { type: Boolean, required: true, default: true, trim: true },
    deletedFlag: { type: Boolean, required: true, default: false, trim: true },
    createdBy: { type: String, required: true, trim: true },
    createdAt: { type: Date, required: true, default: new Date().toLocaleString() },
    updatedBy: { type: String, required: true, trim: true },
    updatedAt: { type: Date, required: true, default: new Date().toLocaleString() }
});
module.exports = mongoose.model(enums.TABLE.ABOUT_US, AboutUsSchema);
