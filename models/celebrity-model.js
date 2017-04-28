const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  celebrityName: {type: String},
  occupation: {type: String},
  catchPhrase: {type: String}
});

/////////////////////    name of the model , Schema how to define the model
////////////////////////       |     ,       |
const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;
