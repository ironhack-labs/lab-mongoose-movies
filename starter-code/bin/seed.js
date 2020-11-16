const mongoose = require('mongoose');

const Celebrity = require('../models/celebrity.model');
const Movie = require('../models/movie.model');

const dbName = 'celebrities-movies';
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true });

// -------> CELEBRITIES <------- 
const celebrities = [
  {
    name: "Alexander McQueen",
    occupation: "Fashion Designer",
    catchPhrase: "I think there is beauty in everything. What ‘normal’ people would perceive as ugly, I can usually see something of beauty in it."
  },
  {
    name: "Eva Green",
    occupation: "Actress",
    catchPhrase: "For me, acting is like a therapy. I can express myself fully when I am acting and have blood in my veins. Even when I'm not working, I'm always living in my own world, imagining characters."
  },
  {
    name: "Grimes",
    occupation: "Singer",
    catchPhrase: "I'm tired of being considered vapid for liking pop music or caring about fashion as if these things inherently lack substance or as if the things I enjoy somehow make me a lesser person."
  },
]

Celebrity
  .create(celebrities)
  .then(createdCelebrities => {
    console.log(`Created ${createdCelebrities.length} celebrities`)
    mongoose.connection.close()
  })
  .catch(err => console.log("There was an error: ", err))


// -------> MOVIES <------- 
  const movies = [
  {
    title: "Pulp Fiction",
    genre: "Crime",
    plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
  },
  {
    title: "Fight Club",
    genre: "Drama",
    plot: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more."
  },
  {
    title: "Spirited Away",
    genre: "Fantasy",
    plot: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts."
  },
  {
    title: "The Pianist",
    genre: "Drama",
    plot: "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II."
  },
]

Movie
  .create(movies)
  .then(createdMovies => {
    console.log(`Created ${createdMovies.length} movies`)
    mongoose.connection.close()
  })
  .catch(err => console.log("There was an error: ", err))
