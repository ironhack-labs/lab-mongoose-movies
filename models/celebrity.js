// - `name` - String(like _Tom Cruise, Beyonce, Daffy Duck, _ etc.)
//   - `occupation` - String(what the celebrity does, why they are famous.For example _actor, singer, comedian_, or you can put _unknown_ if your celebrity is someone like Kim Kardashian)
// - `catchPhrase` - String(every celebrity needs a good catch phrase.Well maybe not all of them have one in real life, but all of _our_ celebrities will have a catch phrase.This can be pretty much anything)

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    default: "unknown"
  },
  catchPhrase: {
    type: String,
    required: true
  }
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;