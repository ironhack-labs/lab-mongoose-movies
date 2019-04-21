require('dotenv').config();

const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')
const Movie = require('../models/Movie')

mongoose.connect(process.env.DB)

const celebrities = [
  {
    name: 'Scarlett Johansson',
    occupation: 'Actress',
    catchPhrase: 'If you feel glamorous, you definitely look glamorous.',
  },
  {
    name: 'Will Smith',
    occupation: 'Actor',
    catchPhrase: 'The first step is you have to say that you can.',
  },
  {
    name: 'Kim Kardashian',
    occupation: 'Unknown',
    catchPhrase: 'For me, skinny is just a style of jeans, not a goal.',
  }
]

Celebrity.create(celebrities)
  .then(movies => {
    console.log(`Nice! You've created ${celebrities.length} new celebrities.`)
    mongoose.connection.close()
  }) 
  .catch(err => console.log(err))

const movies = [
  {
    title:'The Godfather',
    genre: 'Gangster',
    plot: `The Godfather is a 1972 American crime film directed by Francis Ford Coppola and produced by Albert S. Ruddy, based on Mario Puzo's best-selling novel of the same name. It stars Marlon Brando and Al Pacino as the leaders of a fictional New York crime family. The story, spanning 1945 to 1955, chronicles the family under the patriarch Vito Corleone (Brando), focusing on the transformation of Michael Corleone (Pacino) from reluctant family outsider to ruthless mafia boss.`
  },
  { 
    title: 'Intersetellar',
    genre: 'Sci-Fi',
    plot: `Interstellar is a 2014 science fiction film directed, co-written, and co-produced by Christopher Nolan. It stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, and Michael Caine. Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humanity.`
  },
  {
    title: 'Toy Story',
    genre: 'Adventure',
    plot: `Toy Story is a 1995 American computer-animated adventure comedy film produced by Pixar Animation Studios and released by Walt Disney Pictures. The feature-film directorial debut of John Lasseter, it was the first feature-length film to be entirely computer-animated, as well as the first feature film from Pixar. The screenplay was written by Joss Whedon, Andrew Stanton, Joel Cohen, and Alec Sokolow from a story by Lasseter, Stanton, Pete Docter, and Joe Ranft. The film features music by Randy Newman, and was executive-produced by Steve Jobs and Edwin Catmull. The film features the voices of Tom Hanks, Tim Allen, Don Rickles, Wallace Shawn, John Ratzenberger, Jim Varney, Annie Potts, R. Lee Ermey, John Morris, Laurie Metcalf, and Erik von Detten. Taking place in a world where anthropomorphic toys come to life when humans are not present, its plot focuses on the relationship between an old-fashioned pull-string cowboy doll named Woody and an astronaut action figure, Buzz Lightyear, as they evolve, from rivals competing for the affections of their owner Andy Davis, to friends who work together to be reunited with him after being separated.`
  }
]

Movie.create(movies)
  .then(movie => {
    console.log(`Nice! You've created ${movies.length} new movies.`)
    mongoose.connection.close()
  })
  .catch(err => console.log(err))