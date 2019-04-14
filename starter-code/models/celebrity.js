const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const celebritySchema = new Schema({
  name: {type: String, unique: true, required: true},
  occupation : {type: String, required: true, enum: ['actor', 'singer', 'comedian','bullfighter', 'vivant','unknown'], default:'unknown'},
  catchPhrase : {type: String, required: true}
});

const Celebrity = mongoose.model("Celebrities", celebritySchema);

module.exports = Celebrity;