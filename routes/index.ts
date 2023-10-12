import express, { Request, Response, NextFunction } from 'express';
const ROUTER = express.Router();

/* GET home page. */
ROUTER.get('/', function(_req: Request, res: Response, _next: NextFunction) {
  res.render('index', { title: 'Express' });
});

export default ROUTER;
