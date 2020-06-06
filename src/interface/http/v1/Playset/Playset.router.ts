import { injectable, inject } from 'inversify';
import injectables from '@src/inversify.config/injectables';

import * as Express from 'express';

import HttpRouter from '../../HttpRouter';
import GetPlaysetsHandler from './controllers/GetPlaysets.handler';

@injectable()
class PlaysetRouter implements HttpRouter {
  public readonly routerName: string = '/playset';

  public readonly router: Express.Router = Express.Router();

  public constructor(
    @inject(injectables.GetPlaysetsHandler)
    private getPlaysetsHandler: GetPlaysetsHandler,
  ) {}

  private getPlaysetsConfigure() {
    const handler = this.getPlaysetsHandler;
    const handlerMethod = handler.handler.bind(handler);

    this.router.get('/', handlerMethod);
  }
}

export default PlaysetRouter;
