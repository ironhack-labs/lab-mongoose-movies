const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new Schema ({
  name: String,
  occupation: String,
  catchPhrase: String
});

const Celebrity = mongoose.model("Celebrity", celebritySchema);

module.exports = Celebrity;

//first lets make a model for our database, this will be our first step
