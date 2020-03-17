const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie')


const dbtitle = 'Celebrities-Movies-db';
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useNewUrlParser: true, useUnifiedTopology: true });
Celebrity.collection.drop();
Movie.collection.drop();


const celebrities = [
    {
      name : "Will Smith",
      occupation: "Actor",
      catchPhrase: "Girl, yo feet must be tired cause you've been running through my mind all day!",
    
    },
    {
        name : "Martin Luther King",
        occupation: "Minister",
        catchPhrase: "We must accept finite disappointment, but never lose infinite hope",

    },
    {
        name : "Homer Simpson",
        occupation: "Nuclear safety inspector",
        catchPhrase: "Stupid Flanders",
   
    }
]


const movies = [
    {
      title : "Prince of Bel-Air",
      genre: "Comedy",
      plot: "A streetwise, poor young man from Philadelphia is sent by his mother to live with his aunt, uncle and cousins in their Bel-Air mansion. When Will (Will Smith), an inner-city teenager from Philly is sent by his mother to live with his relatives (the Banks) in Bel-Air, everybody is in for a surprise.",
    
    },
    {
        title : "Avatar",
        genre: "Fantasy",
        plot: "En un exuberante planeta llamado Pandora viven los Na'vi, seres que aparentan ser primitivos pero que en realidad son muy evolucionados. Debido a que el ambiente de Pandora es venenoso, los híbridos humanos/Na'vi, llamados Avatares, están relacionados con las mentes humanas, lo que les permite moverse libremente por Pandora. Jake Sully, un exinfante de marina paralítico se transforma a través de un Avatar, y se enamora de una mujer Na'vi.",

    },
    {
        title : "BirdMan",
        genre: "Drama",
        plot: "Un actor pasado de moda, que triunfó en el pasado encarnando a un superhéroe, intenta recuperar la gloria perdida montando una obra en Broadway.",
   
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
