#!/usr/bin/env node

/**
 * Module dependencies.
 */

import APP from '../app';
import http from 'http';
import debug from 'debug';

import 'dotenv/config';

import { ICustomServerListenerError } from '../types/index';

const SEVER_DEBUG = debug('kucc2023.cc:server');

/**
 * Get port from environment and store in Express.
 */

const PORT = normalizePort(process.env.PORT || '3000');
APP.set('port', PORT);

/**
 * Create HTTP server.
 */

const SERVE = http.createServer(APP);

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

function normalizePort(val: string) {
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

function onError(error: ICustomServerListenerError) {
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
    : 'port ' + ADDR?.port;
  SEVER_DEBUG('Listening on ' + BIND);
}
