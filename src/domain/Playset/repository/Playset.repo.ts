import { PlaysetDTO, PlaysetFilter } from '@src/DTO/playset.dto';
import Playset from '../entity/Playset.entity';

export default interface PlaysetRepository {
  getPlaysets(filter?: PlaysetFilter): Promise<Playset[]>;
  getPlaysetById(id: string): Promise<Playset | null>;

  createPlayset(data: PlaysetDTO): Promise<Playset>;

  modifyPlayset(id: string, data: PlaysetDTO): Promise<Playset | null>;

  deletePlayset(id: string): Promise<Playset | null>;

// eslint-disable-next-line semi
}
