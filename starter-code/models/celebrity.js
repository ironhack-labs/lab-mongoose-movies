const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const celebritySchema = new Schema({
  name: { type: String, required: true, unique: true },
  occupation: { type: String, required: true },
  catchPhrase: { type: String, required: true },
  movie: { type: Schema.Types.ObjectId, ref: 'Movie' }
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);
module.exports = Celebrity;