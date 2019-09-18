const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}`);


let celebs = [{
  name: "Francesca",
  occupation: "Air Traffic Controller",
  catchPhrase: "Bring em out!"
},
{
  name: 'Jim Carey',
  occupation: 'actor',
  catchPhrase: 'Alrighty, then!'
},
{
name: 'Kevin Hart',
occupation: 'comedian',
catchPhrase: 'You see, the way my account set up...'
}]


// export object
module.exports = celebs;
