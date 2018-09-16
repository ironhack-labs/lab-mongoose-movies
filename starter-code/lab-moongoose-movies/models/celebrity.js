const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const celebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
  
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

// module.exports = mongoose.model('Celebrity', celebritySchema)
const Celebrity = mongoose.model("Celebrity", celebritySchema);
module.exports = Celebrity;