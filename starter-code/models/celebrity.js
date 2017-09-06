const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const celebritySchema = new Schema ({
  name: {type: String},
  occupation: { type: String },
  catchPhrase: { type: String }
});

const CelebrityModel = mongoose.model('Celebrity', celebritySchema);


module.exports = CelebrityModel;
