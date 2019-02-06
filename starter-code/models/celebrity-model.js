const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritySchema = new Schema(
  {
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    catchPhrase: { type: Number, min: 0, max: 10 }
  },
  {
    timestamps: true
  }
);

const Celebrity = mongoose.model("Celebrity", bookSchema);
module.exports = Celebrity;

name: "Chad Jones";
occupation: "Pro Golfer";
catchPhrase: "Look what I putt up with.";
