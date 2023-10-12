import express, { Request, Response, NextFunction } from 'express';
const ROUTER = express.Router();

/* GET users listing. */
ROUTER.get('/', function(_req: Request, res: Response, _next: NextFunction) {
  res.send('respond with a resource');
});

export default ROUTER;
