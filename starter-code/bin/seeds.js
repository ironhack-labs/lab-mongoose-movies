const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
 
const dbCelebrities = 'celibrities-db';
mongoose.connect(`mongodb://localhost/${dbCelebrities}`);


const celebrityArr = [
    {
        name: 'Donald Trump',
        ocupation: 'Ex-President of EE.UU',
        catchPhrase: 'You are somewhat more traditional politicians (than me).'
    },
    {
        name: 'Will Smith',
        ocupation: 'Actor',
        catchPhrase: 'Life is lived on the edge'
    },
    {
        name: 'Clint Eastwood',
        ocupation: 'Actor',
        catchPhrase: "I have a very strict gun control policy: if there's a gun around, I want to be in control of it.."
    },

];

Celebrity.create(celebrityArr, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${celebrityArr.length} celebrities`)
    mongoose.connection.close();
  });