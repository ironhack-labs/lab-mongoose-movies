const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity-model')
const Movie = require('../models/movie-model')

const dbName = 'celebrity-movies-lab'
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })

//Celebrities Seed
const celebrities = [
  {
    name: `Beyonce`,
    image: `https://m.media-amazon.com/images/M/MV5BMjMxMzg3MDI5NV5BMl5BanBnXkFtZTcwOTAxODc0Ng@@._V1_UY317_CR31,0,214,317_AL_.jpg`,
    occupation: `Singer`,
    catchPhrase: `If you like it, then you shoulda put a ring on it.`
  },
  {
    name: `Leonardo DiCaprio`,
    image: `https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_UY317_CR10,0,214,317_AL_.jpg`,
    occupation: `Actor`,
    catchPhrase: `I'm the king of the world!`
  },
  {
    name: `Kim Kardashian`,
    image: `https://m.media-amazon.com/images/M/MV5BMTc0MjkzOTAxNV5BMl5BanBnXkFtZTcwNTk1NjcyNw@@._V1_UX214_CR0,0,214,317_AL_.jpg`,
    occupation: `unknown`,
    catchPhrase: `I'm kind of shocked I'm getting a fashion award when I'm naked most of the time.`
  }
]

//Celebrities added to the collection
Celebrity.create(celebrities)
  .then(celebritiesSeeded => {
    console.log(`The next ${celebritiesSeeded.length} celebrites were created: ${celebritiesSeeded}`)
  })
  .catch(err => console.log(`An error ocurred: ${err}`))

//Movies Seed
const movies = [
  {
    title: `Parasite`,
    image: `https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg`,
    genre: `Thriller`,
    plot: `A poor family, the Kims, con their way into becoming the servants of a rich family, the Parks. But their easy life gets complicated when their deception is threatened with exposure.`
  },
  {
    title: `Knives Out`,
    image: `https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_UX182_CR0,0,182,268_AL_.jpg`,
    genre: `Crime`,
    plot: `A detective investigates the death of a patriarch of an eccentric, combative family.`
  },
  {
    title: `Joker`,
    image: `https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg`,
    genre: `Crime`,
    plot: `In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.`
  },
  {
    title: `Once Upon a Time... in Hollywood`,
    image: `https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UX182_CR0,0,182,268_AL_.jpg`,
    genre: `Comedy`,
    plot: `A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.`
  },
  {
    title: `Jojo Rabbit`,
    image: `https://m.media-amazon.com/images/M/MV5BZjU0Yzk2MzEtMjAzYy00MzY0LTg2YmItM2RkNzdkY2ZhN2JkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_UX182_CR0,0,182,268_AL_.jpg`,
    genre: `Comedy`,
    plot: `A young boy in Hitler's army finds out his mother is hiding a Jewish girl in their home.`
  }
]

//Movies added to the collection
Movie.create(movies)
  .then(moviesSeeded => {
    console.log(`The next ${moviesSeeded.length} movies were created: ${moviesSeeded}`)
    mongoose.connection.close()
  })
  .catch(err => console.log(`An error ocurred: ${err}`))