import PlaysetTable from '@src/domain/Playset/entity/value-object/PlaysetTable.vo';
import PlaysetPreset from '@src/domain/Playset/entity/value-object/PlaysetPreset.vo';

export type PlaysetDTO = {
  title: string,
  descriptions: { title: string, content: string }[];
  author: string;

  relation: PlaysetTable[],
  desire: PlaysetTable[],
  place: PlaysetTable[],
  stuff: PlaysetTable[],

  preset: PlaysetPreset[],
}

export type PlaysetFilter = {
  author?: string;
  keyword?: string;
}
