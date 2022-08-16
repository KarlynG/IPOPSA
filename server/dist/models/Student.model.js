"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentSchema = void 0;
var mongoose_1 = require("mongoose");
exports.studentSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    code: {
        type: String,
    },
    motherName: {
        type: String
    },
    fatherName: {
        type: String
    },
    image: {
        type: String
    },
    createdDate: {
        type: Date,
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'User'
    }
});
exports.default = (0, mongoose_1.model)('Students', exports.studentSchema);
//# sourceMappingURL=Student.model.js.map