import { Document, Schema, model } from 'mongoose';

export interface UserDocument extends Document {
  username: string;
  nickname: string;
  password: string;
  email: string;
}

const UserSchema = new Schema({
  username: { type: String, required: true },
  nickname: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
});

UserSchema.index({
  username: 'text',
  nickname: 'text',
});

export const UserModel = model<UserDocument>('user', UserSchema);
