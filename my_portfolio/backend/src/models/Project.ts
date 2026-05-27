import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProject extends Document {
  title: string;
  shortDescription?: string;
  description: string;
  cardImageUrl?: string;
  imageUrls?: string[];
  imageUrl?: string;
  techStack?: string[];
  demoLink?: string;
  repoLink?: string;
  features?: string[];
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    shortDescription: { type: String },
    description: { type: String, required: true },
    cardImageUrl: { type: String },
    imageUrls: { type: [String], default: [] },
    imageUrl: { type: String },
    techStack: { type: [String], default: [] },
    demoLink: { type: String },
    repoLink: { type: String },
    features: { type: [String], default: [] },
    order: { type: Number, default: 0 }
  },
  { timestamps: true }
);

const Project: Model<IProject> = mongoose.model<IProject>('Project', ProjectSchema);

export default Project;
