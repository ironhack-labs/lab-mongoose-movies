const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const celebSchema = new Schema({
  name: String,
  occupation: String,
  catchphrase: String,
  rating: Number
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Celeb = mongoose.model("Celeb", celebSchema);

module.exports = Celeb;