import { injectable, inject } from 'inversify';
import injectables from '@src/inversify.config/injectables';
import PlaysetRepository from '@src/domain/Playset/repository/Playset.repo';
import { PlaysetFilter } from '@src/domain/Playset/DTO/playset.dto';

@injectable()
class GetPlaysetsService {
  public constructor(
    @inject(injectables.PlaysetRepository) private playsetRepository: PlaysetRepository,
  // eslint-disable-next-line no-empty-function
  ) {}

  public async getPlaysets(filter?: PlaysetFilter) {
    const playsets = await this.playsetRepository.getPlaysets(filter);

    return playsets;
  }
}

export default GetPlaysetsService;
