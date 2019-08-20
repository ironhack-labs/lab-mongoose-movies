const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const celebritySchema = new Schema ({
    //firstName: { type: String }
    name: String,
    occupation: String,
    nationality: String,
    catchPhrase: String
  }, 
  {
  // keeps record of when it was created and updated
  timestamps: true
  });

const Celebrity = mongoose.model("Celebrity", celebritySchema);
module.exports = Celebrity;