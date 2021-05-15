const { Schema, model } = require("mongoose");

const celebSchema = new Schema(
  {
    name: String,
    occupation: {
        type: String,
        default: 'unknown'
    },
    catchPhrase: String
  }
);

module.exports  = model("Celeb", celebSchema);
