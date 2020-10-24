const mongoose = require("mongoose");
const Schema  = mongoose.Schema;
  
const celebritySchema = new Schema(
    {
    name: {type: String},
    occupation: {type: String},
    catchPhrase: { type: String, required: true },
    }
);

const Celebrity = mongoose.model("celebrity", celebritySchema);

module.exports = Celebrity;