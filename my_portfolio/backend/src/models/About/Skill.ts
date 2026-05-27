import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ISkill extends Document {
  category: string;
  items: string[];
  order: number;
}

const SkillSchema = new Schema<ISkill>({
  category: { type: String, required: true },
  items: { type: [String], default: [] },
  order: { type: Number, default: 0 },
});

const Skill: Model<ISkill> = mongoose.model<ISkill>('Skill', SkillSchema);

export default Skill;
