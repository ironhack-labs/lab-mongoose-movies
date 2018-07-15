const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name : String, //Tom Cruise
  occupation : String, //actor, singer, comedian,unknown
  catchPhrase : String //This can be pretty much anything
});

let Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;