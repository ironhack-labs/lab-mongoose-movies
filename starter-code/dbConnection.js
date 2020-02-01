const mongoose = require('mongoose');
const MongoError = require('mongodb');

require('dotenv').config();

const dbUrl = process.env.DB_URL;

const dropIfExists = async Model => {
    try {
        await Model.collection.drop();
    } catch (e) {
        if (e instanceof MongoError) {
            console.log(`Cannot drop collection ${ Model.collection.name }, maybe you misspelled it or it doesn't exist in DB`);
        } else {
            throw e;
        }
    }
};

const dbConnection = async (action) => {
    // DB CONNECTION
    try {
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to DB');

        if (action) await action();

    // DB CONNECTION ERROR
    } catch (error) {
        console.log(`ERROR: ${error}`);

    // DB DISCONNECTION
    } finally {
        await mongoose.disconnect();
        console.log('Disconnected from DB');
    }
};

module.exports = {
    dbConnection,
    dropIfExists
};