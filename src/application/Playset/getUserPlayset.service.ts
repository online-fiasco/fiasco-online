import { injectable, inject } from 'inversify';
import injectables from '@src/injectables';
import PlaysetRepository from '@src/domain/Playset/repository/Playset.repo';

@injectable()
class GetUserPlaysetService {
  public constructor(
    @inject(injectables.PlaysetRepository) private playsetRepository: PlaysetRepository,
  // eslint-disable-next-line no-empty-function
  ) {}

  public async getUserPlayset(userId: string) {
    const playsets = await this.playsetRepository.getPlaysetsByAuthor(userId);

    return playsets;
  }
}

export default GetUserPlaysetService;
