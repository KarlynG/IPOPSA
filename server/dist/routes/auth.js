"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
var verifyToken_1 = require("../lib/verifyToken");
var auth_service_1 = require("../services/auth.service");
router.post("/signup", auth_service_1.signup);
router.post("/signin", auth_service_1.signin);
router.get("/profile", verifyToken_1.TokenValidation, auth_service_1.profile);
exports.default = router;
//# sourceMappingURL=auth.js.map