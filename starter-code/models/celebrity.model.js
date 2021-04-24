const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const celebSchema = new Schema ({
    name: { 
      type: String,
      unique: true
    },
    occupation: { type: String },
    catchPhrase: { type: String },
  },
  { timestamps: true }
)

module.exports = model("celebrities", celebSchema);