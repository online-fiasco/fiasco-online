import { injectable } from 'inversify';

import Playset from '@src/domain/Playset/entity/Playset.entity';
import PlaysetRepository from '@src/domain/Playset/repository/Playset.repo';

@injectable()
class Mock implements PlaysetRepository {
  getPlaysets(): Promise<Playset[]> {
    throw new Error('Method not implemented.');
  }

  getPlaysetById(): Promise<Playset | null> {
    throw new Error('Method not implemented.');
  }

  createPlayset(): Promise<Playset> {
    throw new Error('Method not implemented.');
  }

  modifyPlayset(): Promise<Playset | null> {
    throw new Error('Method not implemented.');
  }

  deletePlayset(): Promise<Playset | null> {
    throw new Error('Method not implemented.');
  }
}

export default Mock;
