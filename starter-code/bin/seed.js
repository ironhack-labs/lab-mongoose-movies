const mongoose = require('mongoose');
const Celebrity = require('../modules/celebrity');

celebritySeed = [
  {
    name: 'Jorge Luis Borges',
    occupation: 'Escritor',
    catchPhrase: 'El olvido es la única venganza y el único perdón'
  },
  {
    name: 'Jiddu Krishnamurti',
    occupation: 'Filósofo',
    catchPhrase: 'If you begin to understand what you are without trying to change it, then what you are undergoes a transformation.'
  },
  {
    name: 'Alejandro Jodorowsky',
    occupation: 'Escritor',
    catchPhrase: 'Birds born in a cage think flying is an illness.'
  }
]

mongoose.connect('mongodb://localhost/celebritiesApp',{
  useNewUrlParser: true,
})
.then((result) => {
  console.log('Connected to Mongo!');
  Celebrity.create(celebritySeed)
  .then(result => {
    console.log('DB seeded');
    mongoose.disconnect();
  }).cath(err => {
    console.log('Error seeding DB',err);
  });
}).catch(err => {
  console.error('Error connecting to mongo', err);
});
