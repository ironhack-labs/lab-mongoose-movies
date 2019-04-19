const mongoose = require('mongoose');

const celebSchema = new mongoose.Schema ({
  name: String,
  occupation: String,
  catchPhrase: String
})

const Celeb = mongoose.model('Celeb', celebSchema)
module.exports = Celeb;