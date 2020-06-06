import * as Express from 'express';
import { injectable } from 'inversify';

import HttpRouter from '../HttpRouter';

@injectable()
class HttpV1Router implements HttpRouter {
  public readonly routerName: string = '/v1';

  public readonly router: Express.Router = Express.Router();
}

export default HttpV1Router;
