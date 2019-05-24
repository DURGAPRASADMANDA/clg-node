const mongoose = require('mongoose');
const enums = require('../common_utils/enum');
const cfg = require('config');
mongoose.connect(cfg.mongoURI, enums.DB_OPTIONS);

const QuestionsSchema = new mongoose.Schema({
    client: {
        clientName: { type: String, required: true, unique: true },
        clientId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: enums.TABLE.CLIENT, index: true }
    },
    subject: {
        subjectName: { type: String, required: true, unique: true },
        subjectId: { type: mongoose.Schema.Types.ObjectId, required: true }
    },
    question: { type: String, required: true, unique: true },
    optionA: { type: String, required: true, trim: true },
    optionB: { type: String, required: true, trim: true },
    optionC: { type: String, required: true, trim: true },
    optionD: { type: String, required: true, trim: true },
    optionE: { type: String, required: true, trim: true },
    key: { type: String, required: true, trim: true },
    complexLevel: { type: String, required: true, trim: true },
    enableFlag: { type: Boolean, required: true, default: true, trim: true },
    deletedFlag: { type: Boolean, default: false },
    createdBy: { type: String, required: true, trim: true },
    createdAt: { type: Date, required: true, default: new Date().toLocaleString() },
    updatedBy: { type: String, required: true, trim: true },
    updatedAt: { type: Date, required: true, default: new Date().toLocaleString() }
});
module.exports = mongoose.model(enums.TABLE.QUESTIONS, QuestionsSchema);
