const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const CelebritySchema = new Schema({
  name        : {
    type: String,
    required: [true, `Please enter a name.`]
  },
  occupation  : {
    type: String,
    required: [true, `Please enter an occupation.`]
  },
  catchPhrase : {
    type: String,
    required: [true, `Please enter a catchphrase.`]
  }
});

const Celebrity = mongoose.model(`Celebrity`, CelebritySchema);
module.exports = Celebrity;