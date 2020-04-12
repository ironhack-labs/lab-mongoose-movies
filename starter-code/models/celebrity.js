const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new Schema({

  name: String,
  occupation: {
    type: String,
    enum: ["Actor", "Singer", "Author", "Comedian"],
    default: null,
  },
  catchPhrase: {
    type: String,
    default: "yolo",
  },
})

const Celeb = mongoose.model('Celeb', celebritySchema);

module.exports = Celeb;