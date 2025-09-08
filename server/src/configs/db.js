import mongoose from 'mongoose';
const uri = process.env.MONGODB_URI;

export const connectDB = async () => {
  try {
    console.log('Connecting to MongoDB...');
    const conn = await mongoose.connect(uri);
    console.log('MongoDB connected:', conn.connection.host);
  } catch (error) {
    console.log('MongoDB connection error:', error.message);
    process.exit(1);
  }
};
