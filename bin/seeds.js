const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')
const Movie = require('../models/Movie')

mongoose
  .connect('mongodb://localhost/MongooseMovies', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  
const celebs = [
  {
      name:  'Olivia Wilde',
      occupation: 'Actor',
      catchPhrase:   'Only the really young are fearless, have the optimism, the romanticism to take unimaginable risks.',
      image: 'https://m.media-amazon.com/images/M/MV5BNjRmMThkZTItNGQ3Yy00NDc0LWE5OWMtYzkxMDRkMzI1OTcyXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UX214_CR0,0,214,317_AL_.jpg',
  },
  {
    name:  'Garrett Hedlund',
    occupation: 'Actor',
    catchPhrase:   `A great amount of good is always evened out by a great amount of bad. I find it's best to acknowledge that weird balance.`,
    image: 'https://m.media-amazon.com/images/M/MV5BMTM0NDM1NTMwNF5BMl5BanBnXkFtZTYwMTE0NTgz._V1_UY317_CR1,0,214,317_AL_.jpg',
  },
  {
    name:  'Jeff Bridges',
    occupation: 'Actor',
    catchPhrase:   `Most cynics are really crushed romantics: they've been hurt, they're sensitive, and their cynicism is a shell that's protecting this tiny, dear part in them that's still alive.`,
    image: 'https://m.media-amazon.com/images/M/MV5BNTU1NjM4MDYzMl5BMl5BanBnXkFtZTcwMjIwMjMyMw@@._V1_UY317_CR11,0,214,317_AL_.jpg',
  },
  {
    name:  'Mark Wahlberg',
    occupation: 'Actor',
    catchPhrase:   `I've always looked at my career as an athlete would look at his. I won't play forever. Some don't know when to walk away, but the smart ones do.`,
    image: 'https://m.media-amazon.com/images/M/MV5BMTU0MTQ4OTMyMV5BMl5BanBnXkFtZTcwMTQxOTY1NA@@._V1_UY317_CR14,0,214,317_AL_.jpg',
  }
]
Celebrity.create(celebs);

const movies = [
  {
    title: `TRON: Legacy`,
    genre: 'Sci-Fy',
    plot: `The son of a virtual world designer goes looking for his father and ends up inside the digital world that his father designed. He meets his father's corrupted creation and a unique ally who was born inside the digital world.`,
    image: 'https://m.media-amazon.com/images/M/MV5BMTk4NTk4MTk1OF5BMl5BanBnXkFtZTcwNTE2MDIwNA@@._V1_UX182_CR0,0,182,268_AL_.jpg',
  },
  {
    title: `Four Brothers`,
    genre: 'Action',
    plot: `When their adopted mother is gunned down in a store robbery the 'four brothers' investigated the murder for themselves & look for the killers but not all is what it seems.`,
    image: 'https://m.media-amazon.com/images/M/MV5BMTU4NzM3Njg2NV5BMl5BanBnXkFtZTcwNjU4NDczMw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
  },
  {
    title: `The Big Lebowski`,
    genre: 'Comedy',
    plot: `Jeff "The Dude" Lebowski, mistaken for a millionaire of the same name, seeks restitution for his ruined rug and enlists his bowling buddies to help get it.`,
    image: 'https://m.media-amazon.com/images/M/MV5BMTQ0NjUzMDMyOF5BMl5BanBnXkFtZTgwODA1OTU0MDE@._V1_UX182_CR0,0,182,268_AL_.jpg',
  }
]
Movie.create(movies);