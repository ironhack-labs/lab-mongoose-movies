const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritiesSchema = new Schema(
  {
    name: {type: String},
    occupation: {type: String, enum: ["Actor", "Singer", "Comedian", "Unknown"]},
    catchPhrase: {type: String, required: true},
  },
  { timestamps: true }
);

const Celebrities = mongoose.model("Celebrities", celebritiesSchema);
module.exports = Celebrities;