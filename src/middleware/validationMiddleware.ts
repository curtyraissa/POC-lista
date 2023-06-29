import { Request, Response, NextFunction } from 'express';
import itemSchema from '../schema/itemSchema';

const validationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { error } = itemSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

export default validationMiddleware;
