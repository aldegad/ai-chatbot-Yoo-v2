// models/Character.ts
import { ICharacter, IUser } from '@type';
import mongoose, { Schema, Document, Model, SchemaType } from 'mongoose';

const CharacterSchema: Schema = new Schema<ICharacter.Model>({
  name: { type: String, required: true, maxlength: 15 },
  system: { type: String, required: true, maxlength: 1000 },
  secret: { type: String, required: true, maxlength: 500 },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  visibility: {
    type: String,
    required: true,
    enum: Object.values(ICharacter.VisibilityType),
    default: ICharacter.VisibilityType.PRIVATE 
  }
}, { timestamps: true });

export default mongoose.models.Character as Model<ICharacter.Model> || mongoose.model('Character', CharacterSchema);