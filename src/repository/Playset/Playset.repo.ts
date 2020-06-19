import { injectable } from 'inversify';

import Playset from '@src/domain/Playset/entity/Playset.entity';
import PlaysetRepository from '@src/domain/Playset/repository/Playset.repo';

import { PlaysetDTO, PlaysetFilter } from '@src/domain/Playset/DTO/playset.dto';

import { PlaysetModel, PlaysetDocument } from '@src/infrastructure/mongoose/models/Playset.model';
import { MongooseFilterQuery } from 'mongoose';

type PlaysetQuery = MongooseFilterQuery<Pick<PlaysetDocument, keyof Playset>>;

@injectable()
class PlaysetMongoDBRepository implements PlaysetRepository {
  private convertDocument(document: PlaysetDocument): Playset {
    return {
      _id: document._id,
      title: document.title,
      descriptions: document.descriptions,
      author: document.author,
      relation: document.relation,
      desire: document.desire,
      place: document.place,
      stuff: document.stuff,
      preset: document.preset,
    };
  }

  public async getPlaysets(filter: PlaysetFilter = {}): Promise<Playset[]> {
    const { author, keyword } = filter;
    const findOption: PlaysetQuery = {};

    if (author) findOption.author = author;
    if (keyword) findOption.$text = { $search: keyword };

    const playsets = await PlaysetModel.find(findOption);

    return playsets.map(this.convertDocument);
  }

  public async getPlaysetById(id: string): Promise<Playset | null> {
    const playset = await PlaysetModel.findById(id);

    return playset ? this.convertDocument(playset) : null;
  }

  public async createPlayset(data: PlaysetDTO): Promise<Playset> {
    const playset = new PlaysetModel(data);
    const result = await playset.save();

    return this.convertDocument(result);
  }

  public async modifyPlayset(id: string, data: PlaysetDTO): Promise<Playset | null> {
    const result = await PlaysetModel.findByIdAndUpdate(id, data);

    return result ? this.convertDocument(result) : null;
  }

  public async deletePlayset(id: string): Promise<Playset | null> {
    const result = await PlaysetModel.findByIdAndDelete(id);

    return result ? this.convertDocument(result) : null;
  }
}

export default PlaysetMongoDBRepository;
