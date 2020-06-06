import { injectable, inject } from 'inversify';
import injectables from '@src/injectables';
import PlaysetRepository from '@src/domain/Playset/repository/Playset.repo';

@injectable()
class GetPlaysetsService {
  public constructor(
    @inject(injectables.PlaysetRepository) private playsetRepository: PlaysetRepository,
  // eslint-disable-next-line no-empty-function
  ) {}

  public async getPlaysets() {
    const playsets = await this.playsetRepository.getPlaysets();

    return playsets;
  }
}

export default GetPlaysetsService;
