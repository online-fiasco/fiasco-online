import * as Express from 'express';

export default interface HttpHandler {
  handler(req: Express.Request, res: Express.Response, next: Express.NextFunction): Promise<void>;
// eslint-disable-next-line semi
}
