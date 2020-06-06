import { injectable } from 'inversify';

import * as Express from 'express';

import HttpRouter from '../../HttpRouter';

@injectable()
class PlaysetRouter implements HttpRouter {
  public readonly routerName: string = '/playset';

  public readonly router: Express.Router = Express.Router();
}

export default PlaysetRouter;
