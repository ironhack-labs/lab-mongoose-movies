const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');


//have to Connect DB in order for seeds to show.
mongoose
  .connect('mongodb://localhost/starter-code', {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    })


const celebrity = [
    {
        name: 'Tom Cruise',
        occupation: 'Actor',
        catchPhrase: 'Show me the money'
    },
    {
        name: 'Paul Rudd',
        occupation: 'Actor',
        catchPhrase: 'Totes McGotes'
    },
    {
        name: 'Al Pacino',
        occupation: 'Actor',
        catchPhrase: 'Say hello to my little friend.'
    }
]

const createCelebrity = celebrity.map(celebrity => {
    const newCelebrity = new Celebrity(celebrity);
    newCelebrity.save()
    .then(celebrityAdded => {
        console.log(`Celebrity was added: ${celebrityAdded}`)
    })
    .catch(err => console.log(`Err while saving in the DB: ${err}`))
})

//SANDRA'S VERSION

// Celebrity.create(celebrity)
//   .then(savedCelebrity => {
//     savedCelebrity.forEach(oneCelebrity => console.log(`Celebrity savenode seed.jsd: ${celebrity.title}`));
//   })
//   .catch(err => console.log(`Err while saving in the DB: ${err}`))