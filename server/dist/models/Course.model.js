"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trailerSchema = void 0;
var mongoose_1 = require("mongoose");
exports.trailerSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    actors: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    image: {
        type: String
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'User'
    }
});
exports.default = (0, mongoose_1.model)('Trailer', exports.trailerSchema);
//# sourceMappingURL=Course.model.js.map