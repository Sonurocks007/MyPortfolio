import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ICertification extends Document {
  name: string;
  issuer: string;
  link?: string;
  order: number;
}

const CertificationSchema = new Schema<ICertification>({
  name: { type: String, required: true },
  issuer: { type: String, required: true },
  link: { type: String },
  order: { type: Number, default: 0 },
});

const Certification: Model<ICertification> = mongoose.model<ICertification>('Certification', CertificationSchema);

export default Certification;
