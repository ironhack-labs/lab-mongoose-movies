const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name: {
    type: String,
    required: [true, "Provide a name"]
  },
  occupation: {
    type: String,
    required: [true, "Provide an occupation"]
  },
  catchPhrase: String
});

module.exports = mongoose.model("Celebrity", celebritySchema);
