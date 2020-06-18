import { injectable, inject } from 'inversify';
import injectables from '@src/inversify.config/injectables';

import * as Express from 'express';

import HttpRouter from '../../HttpRouter';
import LoginHandler from './controllers/Login.handler';

@injectable()
class UserRouter extends HttpRouter {
  public readonly routerName: string = '/user';

  public readonly router: Express.Router = Express.Router();

  public constructor(
    @inject(injectables.LoginHandler)
    private loginHandler: LoginHandler,
  ) {
    super();
    this.loginConfigure();
  }

  private loginConfigure() {
    const validatior = this.loginHandler.getValidator();
    const handlerMethod = this.getHandlerMethod(this.loginHandler);

    this.router.post('/login', validatior, handlerMethod);
  }
}

export default UserRouter;
