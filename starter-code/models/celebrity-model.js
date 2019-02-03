const mongoose = require('mongoose');

// we use Schema to set our own blueprint for each instance in this collection
const Schema = mongoose.Schema;

const celebritySchema = new Schema ({
  // unless you have more than 1 property defined, you need to use: {type: String}
  // firstName: { type: String },
  firstName: String,
  lastName: String,
  ocupation: String,
  catchPhrase: String,
}, {
  // keep record on when created and updated
  timestamps: true
})

// we create Book class based on these previously defined rules
const Celebrity = mongoose.model("Celebrity", celebritySchema);


// export Book class to make it available in other files
module.exports = Celebrity;