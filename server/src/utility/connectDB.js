const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECT_STRING);
        console.log('✅ MongoDB database connected successfully.');
    } catch (error) {
        console.error('❌ Database Connection Failed:', error.message);
        process.exit(1); // Optional: App crash if DB fails
    }
}

module.exports = connectDB;
