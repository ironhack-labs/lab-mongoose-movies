require('dotenv').config();
const mongoose = require('mongoose');

const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

mongoose.connect(`mongodb://localhost/celebrity`, { useNewUrlParser: true, useUnifiedTopology: true } );

Celebrity.collection.drop();

const celebrities = [
    {
        name : "Julián Lopez",
        occupation: "Comedian",
        catchPhrase: "Primo"
    },
    {
        name : "Joaquín Reyes",
        occupation: "Comedian",
        catchPhrase: "Palabras que van juntas"
    },
    {
        name : "Lola Flores",
        occupation: "Singer",
        catchPhrase: "Si me queréis, irsus"
    }
    
  ];

Celebrity.create(celebrities, (err) => {
    if (err) { throw(err) }
        console.log(`Created ${celebrities.length} celebrities`)
        mongoose.connection.close();
});


mongoose.connect(`mongodb://localhost/movie`, { useNewUrlParser: true, useUnifiedTopology: true } );

Movie.collection.drop();

const movies = [
    {
        title : "Super Lopez",
        genre: "Comedy",
        plot: "Esos"
    },
    {
        title : "Amiga",
        genre: "Drama",
        plot: "Esas"
    },
    {
        title : "La historia de mi vida",
        genre: "Puto drama",
        plot: "Yo misma"
    }
    
  ];


  
  Movie.create(movies, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${movies.length} movies`)
    mongoose.connection.close();
  });