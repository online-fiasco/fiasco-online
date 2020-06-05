import { PlaysetDTO } from '@src/DTO/playset.dto';
import Playset from '../entity/Playset.entity';

export default interface PlaysetRepository {
  getPlaysets(): Playset[];
  getPlaysetsByAuthor(userId: string): Playset[];
  getPlaysetById(id: string): Playset | null;

  createPlayset(data: PlaysetDTO): Playset;

  modifyPlayset(id: string, data: PlaysetDTO): void;

  deletePlayset(id: string): void;

// eslint-disable-next-line semi
}
