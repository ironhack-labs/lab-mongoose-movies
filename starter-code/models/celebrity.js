const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritieSchema = new Schema(
  {
    name: String,
    occupation: String,
    catchPhrase: String,
  }
);

const celebrities = mongoose.model("Celebrities", celebritieSchema);
module.exports = celebrities;
