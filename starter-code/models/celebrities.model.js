const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritiesSchema = new Schema({
  name: String,
  occupation: {
    type: String,
    default: "unknown"
  },
  catchPhrase: String,
  
});


const Celebrities = mongoose.model("Celebrities", celebritiesSchema);

module.exports = Celebrities;