const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const celebritySchema = new Schema({
  name: String,
  occupation: {
    type: String,
    enum: ["actor", "singer", "comedian", "unknown"],
  },
  catchPhrase: String,
  movies: {
    type: [Schema.Types.ObjectId],
    ref: "Movie",
  },
});

module.exports = model("Celebrity", celebritySchema);
