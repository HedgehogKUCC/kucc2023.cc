import express, { Application, Request, Response, NextFunction } from 'express';
import { ICustomRouterHandlerError } from './types/index';

import createError from 'http-errors';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index';
import usersRouter from './routes/users';

const APP: Application = express();

// view engine setup
APP.set('views', path.join(__dirname, 'views'));
APP.set('view engine', 'ejs');

APP.use(logger('dev'));
APP.use(express.json());
APP.use(express.urlencoded({ extended: false }));
APP.use(cookieParser());
APP.use(express.static(path.join(__dirname, 'client')));

APP.use('/', indexRouter);
APP.use('/users', usersRouter);

// catch 404 and forward to error handler
APP.use(function(_req: Request, _res: Response, next) {
  next(createError(404));
});

// error handler
APP.use(function(err: ICustomRouterHandlerError, req: Request, res: Response, _next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default APP;
