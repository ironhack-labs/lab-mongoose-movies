const mongoose = require('mongoose');
const DB_NAME = 'celebritiesApp';
const MONGO_URI = `mongodb://localhost/${DB_NAME}`;

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log(`Connected to ${MONGO_URI}`)
    })
    .catch(err => {
        console.log("Error connecting to DB", err)
    })

