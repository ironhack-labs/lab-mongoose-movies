const mongoose = require('mongoose');
const {
  Schema,
  model
} = mongoose;

const celebritySchema = new Schema({
  // unless you are defining more than the "type" property, you don't have to use {} (see below)
  // firstName: {type: String, require: true}
  name: String,
  occupation: String,
  catchPhrase: String
}, {
  // keeps record when is created and updated
  timestamps: true
});

// const Celebrity = model('Celebrity', celebritySchema);
// module.exports = Celebrity;

module.exports = model('Celebrity', celebritySchema);