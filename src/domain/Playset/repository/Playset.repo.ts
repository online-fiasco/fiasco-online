import { PlaysetDTO } from '@src/DTO/playset.dto';
import Playset from '../entity/Playset.entity';

export default interface PlaysetRepository {
  getPlaysets(): Promise<Playset[]>;
  getPlaysetsByAuthor(userId: string): Promise<Playset[]>
  getPlaysetById(id: string): Promise<Playset | null>;

  createPlayset(data: PlaysetDTO): Promise<Playset>;

  modifyPlayset(id: string, data: PlaysetDTO): Promise<void>;

  deletePlayset(id: string): Promise<void>;

// eslint-disable-next-line semi
}
