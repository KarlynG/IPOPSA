"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var score_service_1 = require("../services/score.service");
var multer_config_1 = __importDefault(require("../config/multer.config"));
var router = (0, express_1.Router)();
router.get('/', score_service_1.get);
router.get('/:id', score_service_1.getOne);
router.post('/', multer_config_1.default.single('image'), score_service_1.post);
router.put('/:id', score_service_1.put);
router.delete('/:id', score_service_1.remove);
exports.default = router;
//# sourceMappingURL=score.router.js.map