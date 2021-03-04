const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritiesSchema = new Schema({
    name : String,
    occupation : String,
    catchPhrase : String
})

const CelebritiesModel = mongoose.model('celebrities', celebritiesSchema);

module.exports = CelebritiesModel;