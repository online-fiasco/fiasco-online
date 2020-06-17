import * as Express from 'express';
import { injectable, multiInject } from 'inversify';

import injectables from '@src/inversify.config/injectables';
import HttpRouter from '../HttpRouter';

@injectable()
class HttpV1Router extends HttpRouter {
  public readonly routerName: string = '/v1';

  public readonly router: Express.Router = Express.Router();

  public constructor(
    @multiInject(injectables.HttpV1Router) routers: HttpRouter[],
  ) {
    super();

    this.router.get('/', (req, res) => {
      res.send('Fiasco-Online HTTP API v1 SERVER');
    });

    routers.forEach((router) => {
      this.router.use(router.routerName, router.router);
    });
  }
}

export default HttpV1Router;
