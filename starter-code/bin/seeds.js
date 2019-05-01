const mongoose = require('mongoose');
const celebrities = require('../models/celebrities');
const movie = require('../models/movies');

//const dbName = 'lab-mongoose-celebrities';
//mongoose.connect(`mongodb://localhost/${dbName}`);

/*const celebrities = [
  {name: "Nene Leakes",
  occupation: "realty star",
  catchPhrase: "I always spill the tea"
  },

  {name:"Heather Dubrow",
    occupation: "actress",
    catchPhrase: "I keep getting better"
    },

    {name: "MJ Javid",
      occupation:"reality star",
      catchPhrase: "I always get the best"
      }
]
//Call create function
celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close();
});
*/

//const mongoose = require('mongoose');
//const movies = require('../models/movies');

const dbName = 'lab-mongoose-celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);

const movies = [
  {title: "Movie 1",
  genre: "action",
  plot: "Action movie"
  },

  {title:"Movie 2",
    genre: "drama",
    plot: "dramatic stuff"
    },

    {title: "Movie 3",
     genre:"comedy",
      plot: "pretty funny"
      }
]
//Call create function
movie.create(movies, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close();
});
