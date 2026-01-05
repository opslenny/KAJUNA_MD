// Database Management for KAJUNA_MD
import mongoose from 'mongoose';

class Database {
  constructor() {
    this.connected = false;
  }

  async connect(mongoUri) {
    try {
      if (!mongoUri) {
        console.warn('⚠️ MongoDB URI not provided. Running in offline mode.');
        return;
      }

      await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

      this.connected = true;
      console.log('✅ Database connected successfully');
    } catch (error) {
      console.error('❌ Database connection failed:', error.message);
      this.connected = false;
    }
  }

  async disconnect() {
    try {
      await mongoose.disconnect();
      this.connected = false;
      console.log('Database disconnected');
    } catch (error) {
      console.error('Disconnect error:', error);
    }
  }

  isConnected() {
    return this.connected;
  }
}

export default new Database();
