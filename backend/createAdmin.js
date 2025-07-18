import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import User from './models/User.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/bodolandtimes';

mongoose.connect(MONGO_URI)
  .then(async () => {
    const existingAdmin = await User.findOne({ username: 'admin' });
    if (existingAdmin) {
      console.log('✅ Admin already exists');
      process.exit();
    }

    const hashedPassword = await bcrypt.hash('yourAdminPassword', 10);
    await User.create({ username: 'admin', password: hashedPassword });
    console.log('✅ Admin created');
    process.exit();
  })
  .catch(err => {
    console.error('❌ DB connection error:', err.message);
    process.exit();
  });
