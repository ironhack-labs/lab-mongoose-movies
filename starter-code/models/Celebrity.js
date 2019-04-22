const mongoose = requiere('mongoose');
const Schema = mongoose.Schema;

const celebrityModel = new Schema( {
  name:{
    type: String,
    unique: true, 
    required: true
  },
  occupation: {
    type: String,
    default: 'unknown'
  },
  catchPhrase: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Celebrity', celebrityModel);