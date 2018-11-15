const mongoose = require('mongoose');
// create a new schema object
const Schema   = mongoose.Schema;



// you only need to do {type: string} if you are adding more rules like a default or minlength
const celebritySchema = new Schema({
    name: String,
    occuptation: String,
    catchPhrase: String,
  });

//3.1 you create the cat class using those rules
const Celebrity = mongoose.model('Celebrity', celebritySchema);


module.exports = Celebrity;