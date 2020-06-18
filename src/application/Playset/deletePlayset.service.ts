import { injectable, inject } from 'inversify';
import injectables from '@src/inversify.config/injectables';

import PlaysetRepository from '@src/domain/Playset/repository/Playset.repo';

import PlaysetNotFound from './Errors/PlaysetNotFound';


@injectable()
class DeletePlaysetService {
  public constructor(
    @inject(injectables.PlaysetRepository) private playsetRepository: PlaysetRepository,
  // eslint-disable-next-line no-empty-function
  ) {}

  public async deletePlayset(id: string) {
    const playset = await this.playsetRepository.deletePlayset(id);

    if (playset === null) {
      throw new PlaysetNotFound(id);
    }

    return playset;
  }
}

export default DeletePlaysetService;
