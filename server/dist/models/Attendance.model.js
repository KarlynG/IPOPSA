"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attendanceSchema = void 0;
var mongoose_1 = require("mongoose");
exports.attendanceSchema = new mongoose_1.Schema({
    status: {
        type: String,
        required: true,
    },
    createdDate: {
        type: Date,
    },
    studentId: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'Student'
    },
    teacherId: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'Teacher'
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'User'
    }
});
exports.default = (0, mongoose_1.model)('Attendance', exports.attendanceSchema);
//# sourceMappingURL=Attendance.model.js.map