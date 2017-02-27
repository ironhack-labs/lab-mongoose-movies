const mongoose = require('mongoose'); //require mongoose in this file

const Schema = mongoose.Schema; // Schema constructor object

const celebSchema = new Schema ({
  name: String,
  occupation: String,
  catchPhrase: String
});


// Product Schema gives us the power to require certain fields
//with certain data types
const Celebrity = mongoose.model('celebrity', celebSchema);

module.exports = Celebrity; 
