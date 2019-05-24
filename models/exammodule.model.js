const mongoose = require('mongoose');
const enums = require('../common_utils/enum');
const cfg = require('config');
mongoose.connect(cfg.mongoURI, enums.DB_OPTIONS);

const ExamModuleSchema = new mongoose.Schema({
    client: {
        clientName: { type: String, required: true, unique: true },
        clientId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: enums.TABLE.CLIENT, index: true }
    },
    exam: {
        examName: { type: String, required: true, unique: true, trim: true },
        examId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: enums.TABLE.EXAM_PATTERNS, index: true }
    },
    moduleName: { type: String, trim: true },
    from: { type: Number, required: true },
    to: { type: Number, required: true },
    numberOfQuestions: { type: Number, required: true },
    positiveManrksPerQuestion: { type: Number, required: true },
    negitiveManrksPerQuestion: { type: Number, required: true },
    marks: { type: Number, required: true },
    enableFlag: { type: Boolean, default: true },
    deletedFlag: { type: Boolean, default: false },
    createdBy: { type: String, required: true, trim: true },
    createdAt: { type: Date, required: true, default: new Date().toLocaleString() },
    updatedBy: { type: String, required: true, trim: true },
    updatedAt: { type: Date, required: true, default: new Date().toLocaleString() }
});
module.exports = mongoose.model(enums.TABLE.EXAM_MODULES, ExamModuleSchema);
