const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebSchema = new Schema ({
    name: String,
    occupation: String,
    catchPhrase: String,
})

const CelebrityModel = mongoose.model('celebrities', celebSchema);
module.exports = CelebrityModel;