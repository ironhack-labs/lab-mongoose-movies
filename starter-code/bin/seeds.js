const mongoose = require('mongoose');

//const Celebrity = require('../models/celebrity_model');
const Movie = require('../models/movie_model');

const DB_TITLE = 'ironhack-lab-mongoose-movies';

mongoose.connect(`mongodb://localhost/${DB_TITLE}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//const celebrities = [
//    {
//        name: 'Joaquin Phoenix',
//        occupation: 'Actress',
//        catchPhrase: `The worst part of having a mental illness is people expect you to behave as if you don't`
//    },
//    {
//        name: 'Ana de Armas',
//        occupation: 'Actress',
//        catchPhrase: `You can always go back to the place where you were comfortable, the place where you're from`
//    },
//    {
//        name: 'Johnny Depp',
//        occupation: 'Actor',
//        catchPhrase: `Music touches us emotionally, where words alone can't`
//    },
//]
//
//Celebrity.create( celebrities )
//.then( savedCelebs => {
//    console.log(`Created ${savedCelebs.length} records`);
//    mongoose.connection.close();
//})
//.catch( err => console.log(`Error during data saving: ${err}`))

const celebrities = [
    {
        title: 'Joker',
        genre: 'Drama/Thriller',
        plot: `Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City.
        Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt 
        to feel like he's part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent 
        into madness as he transforms into the criminal mastermind known as the Joker.`
    },
    {
        title: 'Ana de Armas',
        genre: 'Actress',
        plot: `You can always go back to the place where you were comfortable, the place where you're from`
    },
    {
        title: 'Johnny Depp',
        genre: 'Actor',
        plot: `Music touches us emotionally, where words alone can't`
    },
]

Celebrity.create( celebrities )
.then( savedCelebs => {
    console.log(`Created ${savedCelebs.length} records`);
    mongoose.connection.close();
})
.catch( err => console.log(`Error during data saving: ${err}`))