const mongoose = require("mongoose");


const Schema = mongoose.Schema;


// the schema defines the structure of documents in this collection
const productSchema = new Schema({
    // name of the product
    name: { type: String},

    // price of the product
    occupation:{ type: String },//required:[true, ""]

    // URL of an image file to use in <img src="??">
    catchPhrase: { type: String},

});

// the model has the methods to make database queries
const movieModel = mongoose.model("Celebrity", productSchema);
              //                        |
              // collection name is "products"


module.exports = movieModel;
