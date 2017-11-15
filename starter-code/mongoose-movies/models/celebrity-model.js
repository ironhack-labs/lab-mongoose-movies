const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// the schema defines thestructure of documents in this collection
const celebritySchema = new Schema({
    // Name of the celebrity
    name: {type: String},

    // Celebrity occupation
    occupation: {type: String},

    // Celebrity catchphrase
    catchPhrase: {type: String},
});

// the model has the methods to make database queries
const CelebrityModel = mongoose.model("Celebrity", celebritySchema);
              //
              // collection name is "products"


module.exports = CelebrityModel;
