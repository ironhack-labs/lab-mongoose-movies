const mongoose = require('mongoose');


const celebritySchema = new mongoose.Schema({
  // TODO: write the schema
  name: {
    type:String,
    required:true,
    unique:true
  },
  occupation: {
    type:String,
    required:true,
    unique:true
  },
  catchPhrase: {
    type:String,
    required:true,
    unique:true
  }

});

const Celebrity= mongoose.model('Celibrity', celebritySchema);

module.exports = Celebrity;


