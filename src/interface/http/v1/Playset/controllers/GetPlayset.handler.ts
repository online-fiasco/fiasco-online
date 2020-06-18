import { injectable, inject } from 'inversify';
import injectables from '@src/inversify.config/injectables';

import * as Express from 'express';

import HttpHandler from '@src/interface/http/HttpHandler';

import GetPlaysetService from '@src/application/Playset/getPlayset.service';
import PlaysetNotFound from '@src/application/Playset/Errors/PlaysetNotFound';

@injectable()
class GetPlaysetHandler implements HttpHandler {
  public constructor(
    @inject(injectables.GetPlaysetService)
    private getPlaysetService: GetPlaysetService,
  // eslint-disable-next-line no-empty-function
  ) {}

  public async handler(req: Express.Request, res: Express.Response) {
    const service = this.getPlaysetService;
    const { id } = req.params;

    try {
      const result = await service.getPlayset(id);

      res.status(200).json({ result });
    } catch (error) {
      if (error instanceof PlaysetNotFound) {
        res.status(404).json({ message: error.message });
        return;
      }

      throw error;
    }
  }
}

export default GetPlaysetHandler;
