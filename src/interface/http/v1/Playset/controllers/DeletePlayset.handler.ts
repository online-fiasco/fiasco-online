import { injectable, inject } from 'inversify';
import injectables from '@src/inversify.config/injectables';

import * as Express from 'express';

import HttpHandler from '@src/interface/http/HttpHandler';
import AuthorizedRequest from '@src/interface/http/AuthorizedRequest';

import DeletePlaysetService from '@src/application/Playset/deletePlayset.service';
import PlaysetNotFound from '@src/application/Playset/Errors/PlaysetNotFound';
import GetPlaysetService from '@src/application/Playset/getPlayset.service';

@injectable()
class DeletePlaysetHandler implements HttpHandler {
  public constructor(
    @inject(injectables.DeletePlaysetService)
    private deletePlaysetService: DeletePlaysetService,
    @inject(injectables.GetPlaysetService)
    private getPlaysetService: GetPlaysetService,
  // eslint-disable-next-line no-empty-function
  ) {}

  public async handler(req: AuthorizedRequest, res: Express.Response) {
    const service = this.deletePlaysetService;
    const getService = this.getPlaysetService;
    const { id } = req.params;

    try {
      const { author } = await getService.getPlayset(id);
      if (author !== req.user._id) {
        res.status(403).json({ message: 'No Permission' });
        return;
      }

      const result = await service.deletePlayset(id);

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

export default DeletePlaysetHandler;
