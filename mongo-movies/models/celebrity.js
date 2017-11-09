// More info here how to define a Schema -> http://mongoosejs.com/docs/guide.html
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// More info here -> http://mongoosejs.com/docs/schematypes.html
const celebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
});

const Celebrity = mongoose.model("Celebrity", celebritySchema);

module.exports = {
  Celebrity
};
