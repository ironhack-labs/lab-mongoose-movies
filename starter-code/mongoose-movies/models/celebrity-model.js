const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const celebritySchema = new Schema({
    // Name of the celebrity
    name: {type: String},

    // Celebrity occupation
    occupation: {type: String},

    // Celebrity catchphrase
    catchPhrase: {type: String},

    // Celebrity gif
    imageUrl: {type: String}
});

const CelebrityModel = mongoose.model("Celebrity", celebritySchema);


module.exports = CelebrityModel;
