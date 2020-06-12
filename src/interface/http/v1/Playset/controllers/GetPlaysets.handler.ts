import { inject, injectable } from 'inversify';
import injectables from '@src/inversify.config/injectables';

import * as Express from 'express';

import HttpHandler from '@src/interface/http/HttpHandler';

import GetPlaysetsService from '@src/application/Playset/getPlaysets.service';

@injectable()
class GetPlaysetsHandler implements HttpHandler {
  public constructor(
    @inject(injectables.GetPlaysetsService)
    private getPlaysetsService: GetPlaysetsService,
  // eslint-disable-next-line no-empty-function
  ) {}

  public async handler(req: Express.Request, res: Express.Response) {
    const service = this.getPlaysetsService;
    const result = await service.getPlaysets();

    res.status(200).json({ result });
  }
}

export default GetPlaysetsHandler;
