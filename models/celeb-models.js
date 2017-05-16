const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebSchema = new Schema({
    name: {
        type: String,
        required:[true,'Please Insert Your Name']
    },
    occupation: {
        type: String,
        required:[true,'Please Insert an Occupation']
    },
    catchPhrase: {
        type: String,
        required:[true,'Please Insert an Phrase']
    }
});

const Celebs = mongoose.model('Celebs',celebSchema);

module.exports = Celebs;
