const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // const uri = `mongodb+srv://aryan2130:P3p3aD2en3nQwWob@cluster0.ri4ol.mongodb.net/notes?retryWrites=true&w=majority`;

        const uri = process.env.MONGO_URI;
        await mongoose.connect(uri);
        console.log("MongoDB Connected via Mongoose...");
    } catch (err) {
        console.error("Database connection error:", err.message);
        process.exit(1);
    }
};

module.exports = connectDB;