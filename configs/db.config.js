const mongoose = require("mongoose");
const DB_NAME = "movies"
const MONGO_URI = `mongodb://localhost:27017/${DB_NAME}`;

mongoose.conect(MONGO_URI)
mongoose.connection.on('connected', () => {
    console.log(`connected to db: ${DB_NAME}`);
})
mongoose.connection.on('error', (error) => {
    console.log('DB connection error': error);
});