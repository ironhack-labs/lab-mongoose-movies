const mongoose = require('mongoose');
const DB_NAME = 'movies';
const MONGO_URI = `mongodb://localhost:27017/${DB_NAME}`;

mongoose.connect(MONGO_URI);
mongoose.connection.on('connected', () => {
    console.info(`Connected to database: ${MONGO_URI}`);
});
mongoose.connection.on('error', (error) => {
    console.error('Database connection error:', error);
});