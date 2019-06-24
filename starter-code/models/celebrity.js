const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CelebritySchema = new Schema({
  name: { type: String, unique: true, required: true },
  occupation: {
    type: String,
    enum: [
      "comedian",
      "actor",
      "singer",
      "musician",
      "tv-something",
      "influencer",
      "writer",
      "artist",
      "politician",
      "other"
    ],
    required: true
  },
  catchPhrase: { type: String, required: true }
});

const Celebrity = mongoose.model("Celebrity", CelebritySchema);
module.exports = Celebrity;
