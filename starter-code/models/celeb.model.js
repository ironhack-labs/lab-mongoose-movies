const mongoose = require('mongoose')


let CelebSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  catchPhrase: {
    type: String,
    required: true,
  }
})

let CelebModel = mongoose.model('celeb', CelebSchema)

module.exports = CelebModel