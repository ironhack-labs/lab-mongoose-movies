const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  
  firstName: String,
  lastName: String,
  occupation: {
    type: String,
    enum: ["Actor", "Singer", "Comedian", "Unknown" ]
  },
  catchPhrase: String,
  image_url: String,
},
{
  timestamps: true
})

const Celebrity = mongoose.model("celebrity", celebritySchema);

module.exports = Celebrity;