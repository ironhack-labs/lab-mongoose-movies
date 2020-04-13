const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new Schema({

  name: String,
  occupation: {
    type: String,
    default: null,
  },
  catchPhrase: {
    type: String,
    default: "yolo",
    required: true,
  },
})

const Celeb = mongoose.model('Celeb', celebritySchema);

module.exports = Celeb;