
import { IUser } from '@type';
import mongoose, { Schema, Model } from 'mongoose';

const UserSchema: Schema = new Schema<IUser.Model>({
  email: { type: String, required: true, unique: true, maxlength: 30 },
  password: { type: String, required: true, maxlength: 100 }
}, { timestamps: true });

export default mongoose.models.User as Model<IUser.Model> || mongoose.model<IUser.Model>('User', UserSchema);