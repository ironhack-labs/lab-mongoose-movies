const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
 
const dbCelebrities = 'celibrities-db';
mongoose.connect(`mongodb://localhost/${dbCelebrities}`);


const celebrityArr = [
    {name: ''},
    {occupation: ''},
    {catchPhrase: ''}
];

Celebrity.create(celebrityArr, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${celebrityArr.length} celebrities`)
    mongoose.connection.close();
  });