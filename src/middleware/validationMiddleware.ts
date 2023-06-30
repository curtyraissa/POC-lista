import { Request, Response, NextFunction } from 'express';
import itemSchema from '../schema/itemSchema';
import httpStatus from 'http-status';

const validationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { error } = itemSchema.validate(req.body);
  if (error) {
    return res.sendStatus(httpStatus.NO_CONTENT);
  }
  next();
};

export default validationMiddleware;
