const mongoose    = require('mongoose');
const Celebrity       = require('../models/celebrity');

const celebrities = [
  { name: "Penelope Cruz",
    occupation: "actress",
    catchPhrase: "I'm strong and opinionated. Those qualities brought me a lot of problems since I was a little girl in school, saying 'I don't agree' and fighting with the children. It's part of my curiosity for life."
  },
  { name: "Keith Richards",
    occupation: "musician",
    catchPhrase: "Some things get better with age. Like me."
  },  
    { name: "Groucho Marx",
  occupation: "comedian",
  catchPhrase: "Outside of a dog, a book is a man's best friend. Inside of a dog it's too dark to read."
  }
];
mongoose
  .connect('mongodb://localhost/mongoose-movies', {useMongoClient: true})
  .then(() => {      
    console.log(`Conectado a Mongo... insertando los siguientes registros: ${celebrities}`)  
    Celebrity.create(celebrities)
      .then ((arrayCelebrities) => {
        mongoose.disconnect();
        console.log(`Inserción exitosa de los siguientes registros: ${arrayCelebrities}`)
      })
    
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });
