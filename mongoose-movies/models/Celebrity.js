const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const CelebritySchema = new Schema({
  name : {type:String, required:true},
  occupation : {type:String, required:true},
  catchPhrase : {type:String, required:true},
});

// Create a model and export it
const Celebrity = mongoose.model('Celebrity', CelebritySchema);
module.exports = Celebrity;
