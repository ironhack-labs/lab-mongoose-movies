const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// CREATE SCHEMA
const celebritySchema = new Schema(
  {
    name: String,
    ocupation: String,
    catchPhrase: String,
  },
  {
    timestamps: {
      // https://mongoosejs.com/docs/guide.html#timestamps
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

// CREATE MODEL
//                           Celebrity -->  celebrities
const Celebrity = mongoose.model("Celebrity", celebritySchema);

// EXPORT
module.exports = Celebrity;
