import mongoose from "mongoose";

interface ConnectionOptions {
  montoUrl: string;
  dbName: string;
};

export class MongoDatabase {
  static async connect( options : ConnectionOptions ) {
    const { montoUrl, dbName } = options;

    try {
      await mongoose.connect( montoUrl, {
        dbName: dbName,
      });
      console.log('MongoDB connected');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw new Error('Failed to connect to MongoDB');
    };
  }
}