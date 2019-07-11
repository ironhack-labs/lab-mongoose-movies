
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const celebSchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
  movie: {type: Schema.Types.ObjectId, ref: "movies"},
  famousFor: String
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});


const celebModel = mongoose.model("celebrities", celebSchema);
module.exports = celebModel;


//author: {Schema.Types.ObjectId, ref: Author}