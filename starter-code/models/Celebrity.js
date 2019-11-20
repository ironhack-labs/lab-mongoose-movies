
// const { model, Schema } = require("mongoose");

// const celebitySchema = new Schema(
//   {
//     name: String,
//     occupation: [String],
//     cathPhrase: String 
//   },
//   {
//     timestamps: true
//   }
// );

// module.exports = model("Celebrity", celebitySchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebrity = new Schema({
    name: String,
    occupation: [String],
    catchPhrase: String
});

const Celebrity = mongoose.model("Celebrity", celebrity);

module.exports = Celebrity;