const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const celebSchema = new Schema({
  name: String,
  occupation: String,
  catchphrase: String
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Celebrity = mongoose.model("Celebrity", celebSchema);

module.exports = Celebrity;