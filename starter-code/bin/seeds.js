//Iteration 1 The Celebrity Model
const mongoose = require("mongoose");
const Celebrity = require('../models/Celebrity.model');
const Movie = require('../models/Movie.model');

const { config } = require('dotenv');

require ("../config/config.db.js")

const celebrities = [{
    name: 'Reese Witherspoon',
    occupation: 'actress',
    catchPhrase: 'Stick with the nice boys... bad boys do not bring you coffee in bed, I will tell you that for free.'
  },{
    name: 'Shailene Woodley',
    occupation: 'actress',
    catchPhrase: 'Champagne is never a mistake'
  },{
    name: 'Meryl Streep',
    occupation: 'actress',
    catchPhrase: 'You’re very short. I don’t mean it in a negative way. I find little people to be untrustworthy. My apologies,'
  },{
    name: 'Laura Dern',
    occupation: 'actress',
    catchPhrase: 'Maybe you should have shown a woman a little respect.'
  }
];

const movies = [
  {
      title: 'Bombshell',
      genre: 'Drama',
      plot:  'Three women journalist at Fox News set out to expose CEO Roger Ailes for sexual harrssment'
  },
  {
      title: 'The social network',
      genre: 'Drama',
      plot:  'As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later squeezed out of the business'
  },
  {
    title: 'Legally blonde',
    genre: 'Comedy',
    plot:  'Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school. While she is there, she figures out that there is more to her than just looks.'
  },
  {
    title: 'Divergent',
    genre: 'Drama',
    plot:  'In a world divided by factions based on virtues, Tris learns sheis Divergent and will not fit in. When she discovers a plot to destroy Divergents, Tris and the mysterious Four must find out what makes Divergents dangerous before it is too late.'
  }
];

Celebrity.create(celebrities)
  .then(dbCelebrity => {
    console.log(`Created ${dbCelebrity.length} celebrities`);
    mongoose.connection.close();
  })
  .catch(err =>
    console.log(`An error occurred while creating celebrities in the DB: ${err}`)
  );

Movie.create(movies)
  .then(dbMovies => {
      console.log(`Created ${dbMovies.length} movies`)
      mongoose.connection.close()
  })
  .catch(err => console.log('There was an error creating the movies', err))


