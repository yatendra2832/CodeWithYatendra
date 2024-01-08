const mongoose = require('mongoose');

const URI = "mongodb+srv://yatendrayadav2832:yatendra@cluster0.ldyncxi.mongodb.net/code_with_yatendra?retryWrites=true&w=majority";

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

