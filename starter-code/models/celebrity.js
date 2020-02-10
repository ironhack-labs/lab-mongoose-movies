const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// CREATE SCHEMA
const celebritySchema = new Schema (
  {
    name: String,
    occupation:String,
    catchPhrase: String
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

// CREATE MODEL
const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;


