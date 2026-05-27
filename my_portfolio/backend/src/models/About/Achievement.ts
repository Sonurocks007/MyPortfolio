import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IAchievement extends Document {
  title: string;
  description: string;
  order: number;
}

const AchievementSchema = new Schema<IAchievement>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  order: { type: Number, default: 0 },
});

const Achievement: Model<IAchievement> = mongoose.model<IAchievement>('Achievement', AchievementSchema);

export default Achievement;
