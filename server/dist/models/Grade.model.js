"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gradeSchema = void 0;
var mongoose_1 = require("mongoose");
exports.gradeSchema = new mongoose_1.Schema({
    grade: {
        type: String,
        required: true,
    },
    code: {
        type: String,
    }
});
exports.default = (0, mongoose_1.model)('Grade', exports.gradeSchema);
//# sourceMappingURL=Grade.model.js.map