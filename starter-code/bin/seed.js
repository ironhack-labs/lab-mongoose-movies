const mongoose = require('mongoose');
const Celebrity = require('../modules/celebrity');
const Movies = require('../modules/movies');

celebritySeed = [
  {
    name: 'Jorge Luis Borges',
    occupation: 'Escritor',
    catchPhrase: 'El olvido es la única venganza y el único perdón',
    favoriteBooks:[]
  },
  {
    name: 'Jiddu Krishnamurti',
    occupation: 'Filósofo',
    catchPhrase: 'If you begin to understand what you are without trying to change it, then what you are undergoes a transformation.',
    favoriteBooks:[]
  },
  {
    name: 'Alejandro Jodorowsky',
    occupation: 'Escritor',
    catchPhrase: 'Birds born in a cage think flying is an illness.',
    favoriteBooks:[]
  }
]

bookSeed = [
  {
    title: 'Don Quijote',
    autor: 'Miguel de Cervantes'
  },
  {
    title: 'En busqueda del tiempo perdido',
    autor: 'Marcel Proust'
  },
  {
    title: 'Los hermanos Karamasov',
    autor: 'Fyodor Dostoyevsky'
  }, 
  {
    title: 'Anna Karenina',
    autor: 'Leon Tolstoi'
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
