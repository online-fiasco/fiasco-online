import { inject, injectable } from 'inversify';
import injectables from '@src/inversify.config/injectables';

import * as Express from 'express';

import GetPlaysetsService from '@src/application/Playset/getPlaysets.service';

@injectable()
class GetPlaysetsHandler {
  public constructor(
    @inject(injectables.GetPlaysetsService)
    private getPlaysetsService: GetPlaysetsService,
  // eslint-disable-next-line no-empty-function
  ) {}

  public async handler(req: Express.Request, res: Express.Response): Promise<void> {
    const service = this.getPlaysetsService;
    const result = await service.getPlaysets();

    res.status(200).json({ result });
  }
}

export default GetPlaysetsHandler;
