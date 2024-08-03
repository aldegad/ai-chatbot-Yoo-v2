
import { IUser } from '@type';
import mongoose, { Schema, Model } from 'mongoose';

const UserSchema: Schema = new Schema<IUser.Model>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.User as Model<IUser.Model> || mongoose.model<IUser.Model>('User', UserSchema);