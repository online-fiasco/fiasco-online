import { injectable } from 'inversify';

import Playset from '@src/domain/Playset/entity/Playset.entity';

import PlaysetRepository from '@src/domain/Playset/repository/Playset.repo';
import { PlaysetDTO } from '@src/DTO/playset.dto';

@injectable()
class PlaysetMongoDBRepository implements PlaysetRepository {
  public getPlaysets(): Playset[] {
    throw new Error('Not Implemented');
  }

  public getPlaysetsByAuthor(): Playset[] {
    throw new Error('Not Implemented');
  }

  public getPlaysetById(id: string): Playset | null {
    throw new Error('Method not implemented.');
  }

  public createPlayset(data: PlaysetDTO): Playset {
    throw new Error('Method not implemented.');
  }

  public modifyPlayset(id: string, data: PlaysetDTO): void {
    throw new Error('Method not implemented.');
  }

  public deletePlayset(id: string): void {
    throw new Error('Method not implemented.');
  }
}

export default PlaysetMongoDBRepository;
