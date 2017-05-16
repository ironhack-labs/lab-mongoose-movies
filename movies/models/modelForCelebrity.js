const mongoose = require('mongoose');

// const  = require('./review-model.js');

const Schema = mongoose.Schema;


const celebritySchema = new Schema({
  nameCelebrity: String,
  occupation: String,
  catchPhrase: String,
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);


module.exports = Celebrity;