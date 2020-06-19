import { injectable, inject } from 'inversify';
import injectables from '@src/inversify.config/injectables';
import * as Express from 'express';

import HttpHandler from '@src/interface/http/HttpHandler';
import GetUserPlaysetService from '@src/application/Playset/getUserPlayset.service';

@injectable()
class GetUserPlaysetsHandler implements HttpHandler {
  public constructor(
    @inject(injectables.GetUserPlaysetService)
    private getUserPlaysetService: GetUserPlaysetService,
  // eslint-disable-next-line no-empty-function
  ) {}

  public async handler(req: Express.Request, res: Express.Response) {
    const service = this.getUserPlaysetService;
    const { id } = req.params;

    const result = await service.getUserPlayset(id);

    res.status(200).json(result);
  }
}

export default GetUserPlaysetsHandler;
