const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const celebritySchema = new Schema({
  name: {type: String},
  occupation: {type: String},
  catchPhrase: {type:String},
  image: {type: String, default:"https://images.media-allrecipes.com/images/75131.jpg"},

});

const Recipe = mongoose.model('Celebrity', celebritySchema);
module.exports = Celebrity;