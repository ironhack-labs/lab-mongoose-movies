const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity')

mongoose.connect('mongodb://localhost/starter-code')

const firstsCelebrities = [
    {
        name: 'Carl Sagan',
        occupation: 'astronomer, astrophysicist, cosmologist, astrobiologist, writer and science popularizer',
        catchPhrase: 'Somewhere, something incredible is waiting to be discovered.'
    },
    {
        name: 'Morgan Freeman',
        occupation: ' actor and director',
        catchPhrase: 'Human beings are more concerned with having than with being.'
    },
    {
        name: 'Virginia Woolf',
        occupation: 'writer',
        catchPhrase: 'There is no barrier, lock or bolt that you can impose on the freedom of my mind'
    },
]

Celebrity.create(firstsCelebrities)
    .then(succ => console.log(`Success seeding initialCelebrities `))
    .catch(error => console.log(`Error seeding initialCelebrities `))
