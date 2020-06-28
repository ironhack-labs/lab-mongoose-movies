const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CelebritySchema = new Schema({
    name: String ,
    occupation: String ,
    catchPhrase: String ,
},
    {
    timestamps: true
});

const Celebrity = mongoose.model("celebrities", CelebritySchema);

module.exports = Celebrity;