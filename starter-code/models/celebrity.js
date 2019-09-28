const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebSchema = new Schema({
  name: String,
  occupation: {type: String, enum: ['Actor', 'Singer', 'Comedian', 'Unknown']},
  catchPhrase: {type: String, require:true}
}, {
  timestamps: true
});

const Celebrity = mongoose.model("celebrity", celebSchema);

module.exports = Celebrity;