import { injectable, inject } from 'inversify';
import injectables from '@src/inversify.config/injectables';
import * as Express from 'express';
import { validationResult, body } from 'express-validator';

import HttpHandler from '@src/interface/http/HttpHandler';

import LoginService from '@src/application/User/login.service';
import UserNotFoundError from '@src/application/User/Errors/UserNotFoundError';
import LoginFailedError from '@src/application/User/Errors/LoginFailedError';

@injectable()
class LoginHandler implements HttpHandler {
  public constructor(
    @inject(injectables.LoginService)
    private loginService: LoginService,
  // eslint-disable-next-line no-empty-function
  ) {}

  public async handler(req: Express.Request, res: Express.Response) {
    const service = this.loginService;
    const validation = validationResult(req);
    if (!validation.isEmpty()) {
      res.status(400).json({ errors: validation.array() });
      return;
    }

    const { email, password } = req.body;
    try {
      const result = await service.login(email, password);

      res.status(200).json({ result });
    } catch (error) {
      if (error instanceof UserNotFoundError) {
        res.status(404).json({ message: error.message });
        return;
      }
      if (error instanceof LoginFailedError) {
        res.status(400).json({ message: error.message });
        return;
      }

      throw error;
    }
  }

  public getValidator() {
    return [
      body('email').isEmail(),
      body('password').isString(),
    ];
  }
}

export default LoginHandler;
