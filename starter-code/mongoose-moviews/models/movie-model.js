const mongoose = require("mongoose");


const Schema = mongoose.Schema;


// the schema defines the structure of documents in this collection
const movieSchema = new Schema({
    // name of the product
    nameActor: {
      type: String,
      required: [true, "Actor's name is required."]
    },
    occupation: {
      type: String,
      required: [true, "Actors's occupation is required."]
    },
    catchphrase: {
      type: String,
      required: [true, "Actor's catchphrase is required."]
    }


});

// the model has the methods to make database queries
const MoviewModel = mongoose.model("Movie", movieSchema);
              //                        |
              // collection name is "movies"


module.exports = MoviewModel;
