import { injectable, inject } from 'inversify';
import injectables from '@src/inversify.config/injectables';

import PlaysetRepository from '@src/domain/Playset/repository/Playset.repo';

import { PlaysetDTO } from '@src/domain/Playset/DTO/playset.dto';

import * as Errors from './Errors';


@injectable()
class UpdatePlaysetsService {
  public constructor(
    @inject(injectables.PlaysetRepository) private playsetRepository: PlaysetRepository,
  // eslint-disable-next-line no-empty-function
  ) {}

  public async updatePlayset(id: string, data: PlaysetDTO) {
    const playset = await this.playsetRepository.modifyPlayset(id, data);

    if (playset === null) {
      throw new Errors.PlaysetNotFound(id);
    }

    return playset;
  }
}

export default UpdatePlaysetsService;
