import { injectable } from 'inversify';

import * as Express from 'express';

import HttpRouter from '../../HttpRouter';

@injectable()
class PlaysetController implements HttpRouter {
  public readonly routerName: string = '/playset';

  public readonly router: Express.Router = Express.Router();
}

export default PlaysetController;
