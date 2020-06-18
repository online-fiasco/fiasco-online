import { injectable, inject } from 'inversify';
import injectables from '@src/inversify.config/injectables';
import * as Express from 'express';
import { validationResult, body } from 'express-validator';

import HttpHandler from '@src/interface/http/HttpHandler';
import SignupService from '@src/application/User/signup.service';
import { UserDTO } from '@src/domain/User/DTO/UserDTO';

@injectable()
class SignupHandler implements HttpHandler {
  public constructor(
    @inject(injectables.SignupService)
    private signupService: SignupService,
  // eslint-disable-next-line no-empty-function
  ) {}

  public async handler(req: Express.Request, res: Express.Response) {
    const service = this.signupService;
    const validation = validationResult(req);
    if (!validation.isEmpty()) {
      res.status(400).json({ errors: validation.array() });
      return;
    }

    const data: UserDTO = { ...req.body };
    const result = await service.signup(data, req.body.password);

    res.status(200).json({ result });
  }

  public getValidator() {
    return [
      body('username').isString(),
      body('nickname').isString(),
      body('email').isEmail(),
      body('password').isString(),
    ];
  }
}

export default SignupHandler;
