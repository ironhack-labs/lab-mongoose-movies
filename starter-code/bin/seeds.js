const mongoose = require("mongoose");
const Celebrity = require('../models/Celebrity');
const Movie= require('../models/Movie');
const dbtitle = 'celebrities-project';
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useNewUrlParser: true, useUnifiedTopology: true });
Celebrity.collection.drop();
const celebrities = [
    {
        name: "Brad Pitt",
        occupation:'Actor',
        catchPhrase: 'Hectoooooor',
        image: '/images/img2'
    },
    {
        name: 'Messi',
        occupation:'Dios',
        catchPhrase: 'Ese titulo tan deseado..',
        image: '/images/img3'
    },
    {
        name: 'Matt Groening',
        occupation: 'Director',
        catchPhrase: 'Los Simpsooons',
        image: '/images/img1'
    }     
]
const movies = [
    {
        title: "Troya",
        genre:'Acción',
        plot: 'Un tio muy fuerte semidesnudo pelea contra un ejército entero.'
        
    },
    {
        title: 'The Simpsons Movie',
        genre:'Comedia',
        plot: 'Homer Simpson la lía en un lago, e intenta solucionarlo.'
        
    },
    {
        title: 'Avatar',
        genre: 'Fantasía',
        plot: 'Un chico se adentra en un mundo de fantasía para conseguir recursos y acaba uniéndose a la tribu azul.' 
    }     
]

Celebrity.create(celebrities, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close();
  });

  Movie.create(movies, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${movies.length} movies`)
    mongoose.connection.close();
  });

