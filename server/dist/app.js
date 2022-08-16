"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var path_1 = __importDefault(require("path"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
var auth_1 = __importDefault(require("./routes/auth"));
var trailer_router_1 = __importDefault(require("./routes/trailer.router"));
var area_router_1 = __importDefault(require("./routes/area.router"));
var attendance_router_1 = __importDefault(require("./routes/attendance.router"));
var grade_router_1 = __importDefault(require("./routes/grade.router"));
var score_router_1 = __importDefault(require("./routes/score.router"));
var subject_router_1 = __importDefault(require("./routes/subject.router"));
var student_router_1 = __importDefault(require("./routes/student.router"));
var teacher_router_1 = __importDefault(require("./routes/teacher.router"));
app.use('../uploads', express_1.default.static(path_1.default.resolve('uploads')));
//settings
app.set('port', 3000);
//middlewares
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
//routes
app.use('/api/area', area_router_1.default);
app.use('/api/attendance', attendance_router_1.default);
app.use('/api/grade', grade_router_1.default);
app.use('/api/score', score_router_1.default);
app.use('/api/subject', subject_router_1.default);
app.use('/api/student', student_router_1.default);
app.use('/api/teacher', teacher_router_1.default);
app.use('/api/trailer', trailer_router_1.default);
app.use('/api/auth', auth_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map