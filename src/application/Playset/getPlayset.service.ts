import { injectable, inject } from 'inversify';
import injectables from '@src/inversify.config/injectables';
import PlaysetRepository from '@src/domain/Playset/repository/Playset.repo';

@injectable()
class GetPlaysetService {
  public constructor(
    @inject(injectables.PlaysetRepository) private playsetRepository: PlaysetRepository,
  // eslint-disable-next-line no-empty-function
  ) {}

  public async getPlayset(id: string) {
    const playset = await this.playsetRepository.getPlaysetById(id);

    return playset;
  }
}

export default GetPlaysetService;
