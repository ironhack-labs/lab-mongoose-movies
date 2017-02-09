/*jshint esversion:6*/
const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const CelebritySchema = new Schema ({
  name :{ type:String,required: true },
  occupation :{type: String, required: true},
  catchPhrase :{ type: String,required: true }
  });
const Celebrity = mongoose.model('Celebrity',CelebritySchema);
module.exports = Celebrity;
