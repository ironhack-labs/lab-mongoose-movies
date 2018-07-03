const mongoose = require('mongoose');
const DB_NAME = 'celebrities';
//const DB_NAME = 'movies';
const MONGO_URI = `mongodb://localhost/${DB_NAME}`;

mongoose.connect(MONGO_URI);
mongoose.connection.on('connected', () => {
    console.info(`connected to database: ${DB_NAME}`);
});
mongoose.connection.on('error', (error) =>{
    console.error('Database conecction error:', error);
});