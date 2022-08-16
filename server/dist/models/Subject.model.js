"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subjectSchema = void 0;
var mongoose_1 = require("mongoose");
exports.subjectSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    code: {
        type: String,
    },
    areaId: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'Area'
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'User'
    }
});
exports.default = (0, mongoose_1.model)('Subject', exports.subjectSchema);
//# sourceMappingURL=Subject.model.js.map