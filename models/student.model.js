const mongoose = require('mongoose');
const enums = require('../common_utils/enum');
const cfg = require('config');
mongoose.connect(cfg.mongoURI, enums.DB_OPTIONS);

const ExamSchema = new mongoose.Schema({
    client: {
        clientName: { type: String, required: true, unique: true },
        clientId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: enums.TABLE.CLIENT, index: true }
    },
    examName: { type: String, required: true, unique: true, trim: true },
    marks: { type: Number, required: true },
    examDuration: { type: Number, required: true },
    enableFlag: { type: Boolean, default: true },
    deletedFlag: { type: Boolean, default: false },
    createdBy: { type: String, required: true, trim: true },
    createdAt: { type: Date, required: true, default: new Date().toLocaleString() },
    updatedBy: { type: String, required: true, trim: true },
    updatedAt: { type: Date, required: true, default: new Date().toLocaleString() }
});
module.exports = mongoose.model(enums.TABLE.EXAMS, ExamSchema);
