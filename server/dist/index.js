"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var cors = require('cors');
dotenv_1.default.config();
var app_1 = __importDefault(require("./app"));
require("./config/database");
var corsOptions = {
    exposedHeaders: 'auth-token'
};
app_1.default.use(cors(corsOptions));
var main = function () {
    app_1.default.listen(app_1.default.get('port'));
    console.log('Server on port', app_1.default.get('port'));
};
main();
//# sourceMappingURL=index.js.map