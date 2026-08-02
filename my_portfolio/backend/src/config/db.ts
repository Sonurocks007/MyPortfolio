import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error('MONGO_URI is not defined inside environment variables');
    }
    await mongoose.connect(mongoUri);
    console.log('MongoDB connected successfully');
  } catch (err: any) {
    console.error('MongoDB connection error:', err.message);
    console.warn('Server will continue running, but database features will be disabled until connection is restored.');
  }
};

export default connectDB;
