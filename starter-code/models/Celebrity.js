const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
  img: {type: String, default: 'https://www.wmktdig.com/wp-content/uploads/2017/06/DPB9qdME-1200x1200.jpeg'},
})

const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;