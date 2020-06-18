import * as Express from 'express';
import { verify } from 'jsonwebtoken';

import * as config from '@src/config';
import User from '@src/domain/User/entity/User.entity';
import AuthorizedRequest from '../../AuthorizedRequest';

export default (req: AuthorizedRequest, res: Express.Response, next: Express.NextFunction) => {
  const token = req.headers.authorization;
  if (token === undefined) {
    return res.status(401).json('Unauthorized');
  }
  const decoded = verify(token, config.SecretKey as string) as User;
  req.user = decoded;
  next();
};
