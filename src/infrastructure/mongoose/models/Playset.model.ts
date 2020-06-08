import { Document, Schema, model } from 'mongoose';

import PlaysetTable from '@src/domain/Playset/entity/value-object/PlaysetTable.vo';
import PlaysetPreset from '@src/domain/Playset/entity/value-object/PlaysetPreset.vo';

export interface PlaysetDocument extends Document {
  title: string;
  descriptions: { title: string, content: string }[];
  author: string;

  relation: PlaysetTable[];
  desire: PlaysetTable[];
  place: PlaysetTable[];
  stuff: PlaysetTable[];

  preset: PlaysetPreset[];
}

const PlaysetTableSchema = new Schema({
  title: { type: String, required: true },
  items: { type: [String], required: true },
});

const PlaysetPresetSchema = new Schema({
  relation: [[Number]],
  desire: [[Number]],
  stuff: [[Number]],
  place: [[Number]],
});

const PlaysetSchema = new Schema({
  title: { type: String, required: true },
  descriptions: {
    type: [new Schema({
      title: { type: String, required: true },
      content: { type: String, required: true },
    })],
    default: [],
  },
  author: { type: String, required: true },

  relation: { type: [PlaysetTableSchema], required: true },
  desire: { type: [PlaysetTableSchema], required: true },
  place: { type: [PlaysetTableSchema], required: true },
  stuff: { type: [PlaysetTableSchema], required: true },

  preset: { type: [PlaysetPresetSchema] },
});

PlaysetSchema.index({
  title: 'text',
  'descriptions.content': 'text',
});

export const PlaysetModel = model<PlaysetDocument>('playset', PlaysetSchema);
