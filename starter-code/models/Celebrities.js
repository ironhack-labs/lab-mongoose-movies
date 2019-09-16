const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const celebritiesSchema = new Schema(
  {
    name: String,
    occupation: String,
    catchPhrase: String
  },
  { timestamps: true }
);

const Celebrities = mongoose.model("Celebrities", celebritiesSchema);
module.exports = Celebrities;