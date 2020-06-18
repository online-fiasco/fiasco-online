import { injectable, inject } from 'inversify';
import injectables from '@src/inversify.config/injectables';

import * as Express from 'express';

import HttpRouter from '../../HttpRouter';
import LoginHandler from './controllers/Login.handler';
import SignupHandler from './controllers/Signup.handler';

@injectable()
class UserRouter extends HttpRouter {
  public readonly routerName: string = '/user';

  public readonly router: Express.Router = Express.Router();

  public constructor(
    @inject(injectables.LoginHandler)
    private loginHandler: LoginHandler,
    @inject(injectables.SignupHandler)
    private signupHandler: SignupHandler,
  ) {
    super();
    this.loginConfigure();
    this.signupConfigure();
  }

  private loginConfigure() {
    const validatior = this.loginHandler.getValidator();
    const handlerMethod = this.getHandlerMethod(this.loginHandler);

    this.router.get('/login', validatior, handlerMethod);
  }

  private signupConfigure() {
    const validator = this.signupHandler.getValidator();
    const handlerMethod = this.getHandlerMethod(this.signupHandler);

    this.router.post('/signup', validator, handlerMethod);
  }
}

export default UserRouter;
