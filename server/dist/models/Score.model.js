"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scoreSchema = void 0;
var mongoose_1 = require("mongoose");
exports.scoreSchema = new mongoose_1.Schema({
    createdDate: {
        type: Date,
    },
    score: {
        type: Number,
    },
    subjectId: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'Subject'
    },
    teacherId: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'Teacher'
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'User'
    }
});
exports.default = (0, mongoose_1.model)('Score', exports.scoreSchema);
//# sourceMappingURL=Score.model.js.map