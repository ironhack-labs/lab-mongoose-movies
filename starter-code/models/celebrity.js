const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const celebritySchema = new Schema({
  name:
  {
    type: String,
    required: [true, "Please enter a valid name"]
  },
  occupation:
  {
    type: String,
    required: [true, "Please enter a valid occupation"]
  },
  catchPhrase:
  {
    type: String,
    required: [true, "Please enter a valid catch phrase"]
  }
});

const CelebrityModel = mongoose.model('Celebrity', celebritySchema);
module.exports = CelebrityModel;
