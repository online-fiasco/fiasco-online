import * as Express from 'express';
import User from '@src/domain/User/entity/User.entity';

interface AuthorizedRequest extends Express.Request {
  user: User;
}

export default AuthorizedRequest;
