const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const celebritieSchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Celebritie = mongoose.model("Celebritie", celebritieSchema);
module.exports = Celebritie;