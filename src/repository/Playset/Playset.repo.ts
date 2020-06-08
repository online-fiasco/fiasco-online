import { injectable } from 'inversify';

import Playset from '@src/domain/Playset/entity/Playset.entity';
import PlaysetRepository from '@src/domain/Playset/repository/Playset.repo';

import { PlaysetDTO, PlaysetFilter } from '@src/DTO/playset.dto';

@injectable()
class PlaysetMongoDBRepository implements PlaysetRepository {
  getPlaysets(filter: PlaysetFilter): Promise<Playset[]> {
    throw new Error('Method not implemented.');
  }

  getPlaysetById(id: string): Promise<Playset | null> {
    throw new Error('Method not implemented.');
  }

  createPlayset(data: PlaysetDTO): Promise<Playset> {
    throw new Error('Method not implemented.');
  }

  modifyPlayset(id: string, data: PlaysetDTO): Promise<void> {
    throw new Error('Method not implemented.');
  }

  deletePlayset(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export default PlaysetMongoDBRepository;
