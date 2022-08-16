"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teacherSchema = void 0;
var mongoose_1 = require("mongoose");
exports.teacherSchema = new mongoose_1.Schema({
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
    cedula: {
        type: String,
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
    image: {
        type: String
    },
    createdDate: {
        type: Date,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'User'
    }
});
exports.default = (0, mongoose_1.model)('Teacher', exports.teacherSchema);
//# sourceMappingURL=Teacher.model.js.map