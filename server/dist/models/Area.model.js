"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areaSchema = void 0;
var mongoose_1 = require("mongoose");
exports.areaSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    code: {
        type: String,
    }
});
exports.default = (0, mongoose_1.model)('Area', exports.areaSchema);
//# sourceMappingURL=Area.model.js.map