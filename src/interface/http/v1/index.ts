import { Router } from 'express';
import { injectable } from 'inversify';

import HttpRouter from '../HttpRouter';

@injectable()
class HttpV1Router implements HttpRouter {
  public readonly routerName: string = '/v1';

  getRouter(): Router {
    throw new Error('Method not implemented.');
  }
}

export default HttpV1Router;
