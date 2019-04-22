const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebrityModel = new Schema ({
  name: {
    type: String,
    unique: true,
    required: true
  },
  occupation: {
    type: String,
    default: 'unknown'
  },
  catchPhrase: String
},
{
  timestamps: true,
  versionKey: false
}
);


module.exports = mongoose.model('Celebrity',celebrityModel);