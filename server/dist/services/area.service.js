"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.getArea = exports.getOne = exports.put = exports.post = exports.get = void 0;
var Area_model_1 = __importDefault(require("../models/Area.model"));
var get = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Area_model_1.default.find()];
            case 1:
                data = _a.sent();
                return [2 /*return*/, res.status(200).json(data)];
            case 2:
                err_1 = _a.sent();
                console.log(err_1);
                return [2 /*return*/, res.status(500).json({ Message: 'Error' })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.get = get;
var post = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newArea;
    return __generator(this, function (_a) {
        try {
            newArea = new Area_model_1.default({
                name: req.body.name,
                code: req.body.code,
            });
            newArea.save(function () { return res.status(201).json({ Message: 'Area created correctly' }); });
        }
        catch (err) {
            console.log(err);
            return [2 /*return*/, res.status(500).json({ Message: 'Error', Error: err })];
        }
        return [2 /*return*/];
    });
}); };
exports.post = post;
function put(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, _a, name_1, code, updatedArea, err_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    id = req.params.id;
                    _a = req.body, name_1 = _a.name, code = _a.code;
                    return [4 /*yield*/, Area_model_1.default.findByIdAndUpdate(id, {
                            name: name_1,
                            code: code
                        })];
                case 1:
                    updatedArea = _b.sent();
                    return [2 /*return*/, res.json({
                            message: 'Area Successfully updated'
                        })];
                case 2:
                    err_2 = _b.sent();
                    console.log(err_2);
                    return [2 /*return*/, res.status(500).json({ Message: 'Error' })];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.put = put;
;
var getOne = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, data, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, Area_model_1.default.findById(id)];
            case 1:
                data = _a.sent();
                return [2 /*return*/, res.status(200).json(data)];
            case 2:
                err_3 = _a.sent();
                console.log(err_3);
                res.status(500).json({ Message: 'Error' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getOne = getOne;
function getArea(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    return [4 /*yield*/, Area_model_1.default.findById(id)];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, res.json(data)];
            }
        });
    });
}
exports.getArea = getArea;
var remove = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, Area_model_1.default.findByIdAndRemove(id)];
            case 1:
                _a.sent();
                return [2 /*return*/, res.status(200).json({ Message: 'Area removed succesfully' })];
            case 2:
                err_4 = _a.sent();
                console.log(err_4);
                return [2 /*return*/, res.status(500).json({ Message: 'Error', Error: err_4 })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.remove = remove;
//# sourceMappingURL=area.service.js.map