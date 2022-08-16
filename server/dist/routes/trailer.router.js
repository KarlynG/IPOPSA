"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var trailer_service_1 = require("../services/trailer.service");
var multer_config_1 = __importDefault(require("../config/multer.config"));
var router = (0, express_1.Router)();
router.get('/', trailer_service_1.get);
router.get('/:id', trailer_service_1.getOne);
router.post('/', multer_config_1.default.single('image'), trailer_service_1.post);
router.put('/:id', trailer_service_1.put);
router.delete('/:id', trailer_service_1.remove);
exports.default = router;
//# sourceMappingURL=trailer.router.js.map