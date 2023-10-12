"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("./routes/index"));
const users_1 = __importDefault(require("./routes/users"));
const APP = (0, express_1.default)();
// view engine setup
APP.set('views', path_1.default.join(__dirname, 'views'));
APP.set('view engine', 'ejs');
APP.use((0, morgan_1.default)('dev'));
APP.use(express_1.default.json());
APP.use(express_1.default.urlencoded({ extended: false }));
APP.use((0, cookie_parser_1.default)());
APP.use(express_1.default.static(path_1.default.join(__dirname, 'client')));
APP.use('/', index_1.default);
APP.use('/users', users_1.default);
// catch 404 and forward to error handler
APP.use(function (_req, _res, next) {
    next((0, http_errors_1.default)(404));
});
// error handler
APP.use(function (err, req, res, _next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
exports.default = APP;
