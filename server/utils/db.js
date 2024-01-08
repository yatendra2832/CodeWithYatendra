const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI;

const connectDb = async () => {
    try {
        await mongoose.connect(URI)
        console.log("Database Connection Successful...");
    } catch (error) {
        console.log("Database Connection failed:", error);
        process.exit(0);
    }
}

module.exports = connectDb;

