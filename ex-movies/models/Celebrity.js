const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const bookSchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase:String
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Celebrity = mongoose.model("Celebrity", bookSchema);

module.exports = Celebrity;