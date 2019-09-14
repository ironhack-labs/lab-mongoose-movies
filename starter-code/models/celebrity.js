const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Celebrity = new Schema(
  {
    name: String,
    occupation: ["actor", "singer", "comedian", "unknown"],
    catchPhrase: String,
  },
  { timestamps: true }
);

const Celebrities = mongoose.model("Celebrity", Celebrity);
module.exports = Celebrities;