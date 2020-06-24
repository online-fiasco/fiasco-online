import { injectable, inject } from 'inversify';
import injectables from '@src/inversify.config/injectables';
import * as Express from 'express';
import { body, validationResult } from 'express-validator';

import HttpHandler from '@src/interface/http/HttpHandler';
import UpdatePlaysetsService from '@src/application/Playset/updatePlayset.service';
import AuthorizedRequest from '@src/interface/http/AuthorizedRequest';
import { PlaysetDTO } from '@src/domain/Playset/DTO/playset.dto';
import PlaysetNotFound from '@src/application/Playset/Errors/PlaysetNotFound';

@injectable()
class UpdatePlaysetHandler implements HttpHandler {
  public constructor(
    @inject(injectables.UpdatePlaysetService)
    private updatePlaysetService: UpdatePlaysetsService,
  // eslint-disable-next-line no-empty-function
  ) {}

  public async handler(req: AuthorizedRequest, res: Express.Response) {
    const service = this.updatePlaysetService;
    const validation = validationResult(req);
    if (!validation.isEmpty()) {
      res.status(400).json({ errors: validation.array() });
      return;
    }

    const data: PlaysetDTO = { ...req.body, author: req.user._id };
    try {
      const result = await service.updatePlayset(req.params.id, data);

      res.status(200).json({ result });
    } catch (error) {
      if (error instanceof PlaysetNotFound) {
        res.status(404).json({ message: error.message });
        return;
      }

      throw error;
    }
  }

  public getValidator() {
    return [
      body('title').isString(),
      body('descriptions').isArray(),
      body('descriptions.*.title').isString(),
      body('descriptions.*.content').isString(),

      ...this.getPlaysetTableValidator('relation'),
      ...this.getPlaysetTableValidator('desire'),
      ...this.getPlaysetTableValidator('place'),
      ...this.getPlaysetTableValidator('stuff'),

      body('preset').isArray(),
      body('preset.*.relation').isArray(),
      body('preset.*.relation.*').isArray(),
      body('preset.*.relation.*.*').isArray({ min: 2, max: 2 }),
      body('preset.*.desire').isArray(),
      body('preset.*.desire.*').isArray(),
      body('preset.*.desire.*.*').isArray({ min: 2, max: 2 }),
      body('preset.*.stuff').isArray(),
      body('preset.*.stuff.*').isArray(),
      body('preset.*.stuff.*.*').isArray({ min: 2, max: 2 }),
      body('preset.*.place').isArray(),
      body('preset.*.place.*').isArray(),
      body('preset.*.place.*.*').isArray({ min: 2, max: 2 }),
    ];
  }

  private getPlaysetTableValidator(name: string) {
    return [
      body(`${name}`).isArray({ min: 6, max: 6 }),
      body(`${name}.*.title`).isString(),
      body(`${name}.*.items`).isArray({ min: 6, max: 6 }),
      body(`${name}.*.items.*`).isString(),
    ];
  }
}

export default UpdatePlaysetHandler;
