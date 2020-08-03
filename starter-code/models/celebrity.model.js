const mongoose = require('mongoose');

let CelebritySchema = new mongoose.Schema({
  name: String,
  occupation: String,
  catchPhrase: String
})

let CelebrityModel = mongoose.model('Celebritie', CelebritySchema);

module.exports = CelebrityModel;