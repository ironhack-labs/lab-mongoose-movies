const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.js');

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err))

const feedCelebrities = [
    {
        name: 'Clinton Eastwood Jr.',
        occupation: 'Actor',
        catchPhrase: 'Tomorrow is promised to no one'
    },
    {
        name: 'Rami Said Malek',
        occupation: 'Actor',
        catchPhrase: `People used to think of me as a comedy actor`
    },
    {
        name: 'Adele Laurie Blue Adkins',
        occupation: 'Singer',
        catchPhrase: `People are starting to go on about my weight but I'm not going to change my size because they don't like the way I look`
    }
]

Celebrity.create(feedCelebrities)
    .then(items => console.log(`${items.length} have been created`))
    .catch(err => console.log(`Error occured creating celebrities: ${err}`))