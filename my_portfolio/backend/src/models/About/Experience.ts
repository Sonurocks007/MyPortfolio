import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IExperience extends Document {
  role: string;
  company: string;
  duration: string;
  description: string;
  order: number;
}

const ExperienceSchema = new Schema<IExperience>({
  role: { type: String, required: true },
  company: { type: String, required: true },
  duration: { type: String, required: true },
  description: { type: String, required: true },
  order: { type: Number, default: 0 },
});

const Experience: Model<IExperience> = mongoose.model<IExperience>('Experience', ExperienceSchema);

export default Experience;
