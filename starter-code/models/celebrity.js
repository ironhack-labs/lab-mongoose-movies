const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  name: { type: String },
  occupation: { type: String },
  catchPhrase: { type: String },
});

const Celebrity = mongoose.model("Celebrity", Schema);

module.exports = Celebrity;

// const celebritiesSchema = new Schema({
//   name: { type: String},
//   occupation: { type: String},
//   catchPhrase: { type: String},
// });
