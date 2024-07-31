// models/Character.ts
import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './User';

export enum VisibilityType {
  PUBLIC = '공개',
  PRIVATE = '비공개',
  LINK = '링크공개'
}

export interface ICharacter extends Document {
  name: string;
  system: string;
  creator: IUser['_id'];
  visibility: VisibilityType;
  createdAt: Date;
  updatedAt: Date;
}

const CharacterSchema: Schema = new Schema({
  name: { type: String, required: true, maxlength: 15 },
  system: { type: String, required: true, maxlength: 100 },
  creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  visibility: { type: String, enum: Object.values(VisibilityType), default: VisibilityType.PRIVATE }
}, { timestamps: true });

export default mongoose.models.Character || mongoose.model('Character', CharacterSchema);