import { injectable, inject } from 'inversify';
import injectables from '@src/inversify.config/injectables';

import * as Express from 'express';

import HttpRouter from '../../HttpRouter';
import authorize from '../middlewares/auth';

import GetPlaysetsHandler from './controllers/GetPlaysets.handler';
import GetPlaysetHander from './controllers/GetPlayset.handler';
import CreatePlaysetHandler from './controllers/CreatePlayset.handler';

@injectable()
class PlaysetRouter extends HttpRouter {
  public readonly routerName: string = '/playset';

  public readonly router: Express.Router = Express.Router();

  public constructor(
    @inject(injectables.GetPlaysetsHandler)
    private getPlaysetsHandler: GetPlaysetsHandler,
    @inject(injectables.GetPlaysetHandler)
    private getPlaysetHandler: GetPlaysetHander,
    @inject(injectables.CreatePlaysetHandler)
    private createPlaysetHandler: CreatePlaysetHandler,
  ) {
    super();
    this.getPlaysetsConfigure();
    this.getPlaysetConfigure();
    this.createPlaysetConfigure();
  }

  private getPlaysetsConfigure() {
    const handlerMethod = this.getHandlerMethod(this.getPlaysetsHandler);

    this.router.get('/', handlerMethod);
  }

  private getPlaysetConfigure() {
    const handlerMethod = this.getHandlerMethod(this.getPlaysetHandler);

    this.router.get('/:id', handlerMethod);
  }

  private createPlaysetConfigure() {
    const validator = this.createPlaysetHandler.getValidator();
    const handlerMethod = this.getHandlerMethod(this.createPlaysetHandler);

    this.router.post('/', authorize, validator, handlerMethod);
  }
}

export default PlaysetRouter;
