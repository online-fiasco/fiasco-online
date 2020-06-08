import PlaysetTable from './value-object/PlaysetTable.vo';
import PlaysetPreset from './value-object/PlaysetPreset.vo';

export default class Playset {
  _id?: string;

  title: string;

  descriptions: { title: string, content: string }[];

  author: string;

  relation: PlaysetTable[];

  desire: PlaysetTable[];

  place: PlaysetTable[];

  stuff: PlaysetTable[];

  preset: PlaysetPreset[];
}
