const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = 'celebrities-project';
mongoose.connect(`mongodb://localhost/${dbName}`);

celebrities = [
    {
        name: 'uno',
        occupation : 'Singer',
        catchPhrase: 'djhfkjdhgksdgh'   
    },
    {
        name: 'dos',
        occupation : 'Singer',
        catchPhrase: 'djhfkjdhgksdgh'   
    },
    {
        name: 'tres',
        occupation : 'Singer',
        catchPhrase: 'djhfkjdhgksdgh' 
    },
    {
        name: 'cuatro',
        occupation : 'Singer',
        catchPhrase: 'djhfkjdhgksdgh' 
    },
    {
        name: 'cinco',
        occupation : 'Singer',
        catchPhrase: 'djhfkjdhgksdgh' 
    },
    {
        name: 'seis',
        occupation : 'Singer',
        catchPhrase: 'djhfkjdhgksdgh' 
    },
    {
        name: 'siete',
        occupation : 'Singer',
        catchPhrase: 'djhfkjdhgksdgh' 
    },
    {
        name: 'ocho',
        occupation : 'Singer',
        catchPhrase: 'djhfkjdhgksdgh'
    },
    {
        name: 'nueve',
        occupation : 'Singer',
        catchPhrase: 'djhfkjdhgksdgh'
    },
    {
        name: 'diez',
        occupation : 'Singer',
        catchPhrase: 'djhfkjdhgksdgh'
    }
]

Celebrity.create(celebrities, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${celebrities.length} celebrities ohhhh yeah`)
    mongoose.connection.close()
  });