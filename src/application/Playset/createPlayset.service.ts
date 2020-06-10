import { injectable, inject } from 'inversify';
import injectables from '@src/inversify.config/injectables';

import PlaysetRepository from '@src/domain/Playset/repository/Playset.repo';

import { PlaysetDTO } from '@src/domain/Playset/DTO/playset.dto';


@injectable()
class CreatePlaysetService {
  public constructor(
    @inject(injectables.PlaysetRepository) private playsetRepository: PlaysetRepository,
  // eslint-disable-next-line no-empty-function
  ) {}

  public async createPlayset(data: PlaysetDTO) {
    const playset = await this.playsetRepository.createPlayset(data);

    return playset;
  }
}

export default CreatePlaysetService;
