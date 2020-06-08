import { injectable } from 'inversify';


import Playset from '@src/domain/Playset/entity/Playset.entity';
import PlaysetRepository from '@src/domain/Playset/repository/Playset.repo';

import { PlaysetDTO, PlaysetFilter } from '@src/DTO/playset.dto';

@injectable()
class PlaysetMockRepository implements PlaysetRepository {
  public async getPlaysets(filter: PlaysetFilter): Promise<Playset[]> {
    const result: Playset[] = [
      {
        _id: 'sampleId1',
        title: 'Sample Playset 1',
        author: 'authorId1',
        descriptions: [{ title: 'desc title...', content: 'this is sample desc' }],
        desire: [],
        relation: [],
        stuff: [],
        place: [],
        preset: [],
      },
      {
        _id: 'sampleId2',
        title: 'Sample Playset 2',
        author: 'authorId2',
        descriptions: [{ title: 'desc title...', content: 'this is sample desc' }],
        desire: [],
        relation: [],
        stuff: [],
        place: [],
        preset: [],
      },
      {
        _id: 'sampleId3',
        title: 'Sample Playset 3',
        author: 'authorId1',
        descriptions: [{ title: 'desc title...', content: 'this is sample desc' }],
        desire: [],
        relation: [],
        stuff: [],
        place: [],
        preset: [],
      },
    ];

    return result;
  }

  getPlaysetsByAuthor(userId: string): Promise<Playset[]> {
    throw new Error('Method not implemented.');
  }

  getPlaysetById(id: string): Promise<Playset | null> {
    throw new Error('Method not implemented.');
  }

  createPlayset(data: PlaysetDTO): Promise<Playset> {
    throw new Error('Method not implemented.');
  }

  modifyPlayset(id: string, data: PlaysetDTO): Promise<Playset | null> {
    throw new Error('Method not implemented.');
  }

  deletePlayset(id: string): Promise<Playset | null> {
    throw new Error('Method not implemented.');
  }
}

export default PlaysetMockRepository;
