const mongoose = require('mongoose');
const Movie = require('../models/Movie');

const dbName = 'celebrities-project';
mongoose.connect(`mongodb://localhost/${dbName}`);

movies = [
    {
        title: 'El Rey León',
        genre: 'Drama',
        plot: 'aksjdhfdjshfasjdhfdjkh'
    },
    {
        title: 'El verdugo',
        genre: 'Drama',
        plot: 'aksjdhfdjshfappririririrsjdhfdjkh'  
    },
    {
        title: 'Machete',
        genre: 'Comedia',
        plot: 'aksjdhfdsdfodrkmfifkfidjririririrsjdhfdjkh'  
    },
    {
        title: 'Jamón jamón',
        genre: 'Drama',
        plot: 'aksjdhfdjshfappririririrsjdhfdjkh'  
    },
    {
        title: 'El día de la bestia',
        genre: 'Drama',
        plot: 'aksjdhfdjshfappririririrsjdhfdjkh'  
    }

]
Movie.create(movies, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${movies.length} movies ohhhh yeah`)
    mongoose.connection.close()
  });