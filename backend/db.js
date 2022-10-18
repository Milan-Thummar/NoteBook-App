const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const mongoURI = process.env.MONGO_URL;

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Coonected to mongoose successfully.");
    });
};

module.exports = connectToMongo;
