
const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');
const DB_NAME = 'celebrities-app';

let newCelebrities = [
    {
        name: 'Emma Watson',
        occupation:'Actress',
        catchPhrase:'It’s not the absence of fear. It’s overcoming it. Sometimes you’ve got to blast through and have faith.'
    },
    {
        name: 'Will Smith',
        occupation: 'Actor',
        catchPhrase: 'Oh My God, Carlton! What is that hideous thing growing out of your neck!'
    },

    {
        name: 'John Lennon',
        occupation: 'Musician',
        catchPhrase: `Life is what happens when you're busy making other plans`

    }
]

mongoose.connect(`mongodb://localhost/${DB_NAME}`)
    .then(() => {
        console.log('Connected to database to create 1st info');

        Celebrity.insertMany(newCelebrities)
            .then(celebrities => {
                console.log(`${celebrities.length} inserted.`);
            })
    })
    .catch(error => console.error(error));
    
  
    