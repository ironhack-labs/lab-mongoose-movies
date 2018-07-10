const mongoose = require("mongoose");
const Schema   = mongoose.Schema;



const celSchema = new Schema({
  name: {type:String},
  occupation: {type:String},
  catchPhrase: {type:String}
  
});

const Celebrity = mongoose.model("Celebrity", celSchema);



module.exports = Celebrity;