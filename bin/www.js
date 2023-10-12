#!/usr/bin/env node
"use strict";
/**
 * Module dependencies.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../app"));
const http_1 = __importDefault(require("http"));
const debug_1 = __importDefault(require("debug"));
require("dotenv/config");
const SEVER_DEBUG = (0, debug_1.default)('kucc2023.cc:server');
/**
 * Get port from environment and store in Express.
 */
const PORT = normalizePort(process.env.PORT || '3000');
app_1.default.set('port', PORT);
/**
 * Create HTTP server.
 */
const SERVE = http_1.default.createServer(app_1.default);
/**
 * Listen on provided port, on all network interfaces.
 */
SERVE.listen(PORT);
SERVE.on('error', onError);
SERVE.on('listening', onListening);
console.log(`Server is running on port ${PORT}`);
/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}
/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    var bind = typeof PORT === 'string'
        ? 'Pipe ' + PORT
        : 'Port ' + PORT;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    const ADDR = SERVE.address();
    const BIND = typeof ADDR === 'string'
        ? 'pipe ' + ADDR
        : 'port ' + (ADDR === null || ADDR === void 0 ? void 0 : ADDR.port);
    SEVER_DEBUG('Listening on ' + BIND);
}
