const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');


const dbtitle = 'celebritiesAndMovies';
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useNewUrlParser: true, useUnifiedTopology: true });


const celebrities = [
    {
      name: "Kanye West",
      occupation: "Singer",
      catchPhrase: "La originalidad está sobrevalorada"
    },
    {
      name: "Cristiano Ronaldo",
      occupation: "Football player",
      catchPhrase: "Tu amor me hace fuerte, tu odio me hace imparable."  
    },
    {
      name: "Aubrey Plaza",
      occupation: "Actress",
      catchPhrase: "La gente que se ríe de la gente en Internet..."
    },
    {
      name: "Jim Carrey",
      occupation: "Actor",
      catchPhrase: "Sólo quiero ser yo mismo."
    }
  ];

  const movies = [
    {
      title: "MIB",
      genre: "Action",
      plot: "WHAAM, POW, BANG",
    },
    {
      title: "Lucy",
      genre: "Action",
      plot: "Sexy Intelligence",
    },
    {
      title: "The Lion King",
      genre: "Family",
      plot: "Nala dates with Simba",
    }
  ]

  Celebrity.create(celebrities, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${celebrities.length} celebrities`)
    
  });

  Movie.create(movies, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${movies.length} movies`)
    mongoose.connection.close();
  });