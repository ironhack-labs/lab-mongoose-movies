const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const directorSchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
  image: String,
  creator: {type: Schema.Types.ObjectId, ref: 'User'},
});

const Director = mongoose.model("Director", directorSchema);

module.exports = Director;