const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CelebritySchema = new Schema({
  name : { type: String, required : [true, "Please Enter Your Name"]},
  occupation : { type: String, required : [true, "Please Enter Your Occupation"]  },
  catchPhrase : { type: String, required: [true, "Please enter your Catch Phrase (e.g. 'It's showtime')"]  }
})

const Celebrity = mongoose.model('Celebrity', CelebritySchema);

module.exports = Celebrity;
