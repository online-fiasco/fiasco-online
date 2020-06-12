import { Router } from 'express';
import * as Express from 'express';
import { injectable } from 'inversify';
import HttpHandler from './HttpHandler';

@injectable()
export default abstract class HttpRouter {
  public abstract readonly routerName: string;

  public abstract readonly router: Router;

  protected getHandlerMethod(handler: HttpHandler) {
    return async (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
      handler.handler.bind(handler)(req, res, next)
        .catch((err: Error) => {
          next(err);
        });
    };
  }

// eslint-disable-next-line semi
}
