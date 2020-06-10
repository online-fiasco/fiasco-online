import { injectable, inject } from 'inversify';
import injectables from '@src/inversify.config/injectables';

import PlaysetRepository from '@src/domain/Playset/repository/Playset.repo';

import { PlaysetDTO } from '@src/DTO/playset.dto';


@injectable()
class UpdatePlaysetsService {
  public constructor(
    @inject(injectables.PlaysetRepository) private playsetRepository: PlaysetRepository,
  // eslint-disable-next-line no-empty-function
  ) {}

  public async updatePlayset(id: string, data: PlaysetDTO) {
    const playset = await this.playsetRepository.modifyPlayset(id, data);

    return playset;
  }
}

export default UpdatePlaysetsService;
