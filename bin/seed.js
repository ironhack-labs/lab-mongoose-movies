// REQUIRES
const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity.model')
const Movie = require('../models/movie.model')

// DB CONNECTION
const dbName = 'ironhack-mongoose-movies-lab'
mongoose.connect(`mongodb://localhost/${ dbName }`)

// DEVELOP UTILITIES
const chalk = require('chalk')
const faker = require('faker')
const yellow = chalk.bold.yellow

// SEED

Celebrity.collection.drop()
Movie.collection.drop()

// Celebrities
const celebrities = [
  {
    name: faker.name.findName(),
    occupation: faker.name.jobTitle(),
    catchPhrase: faker.company.catchPhrase()
  },
  {
    name: faker.name.findName(),
    occupation: faker.name.jobTitle(),
    catchPhrase: faker.company.catchPhrase()
  },
  {
    name: faker.name.findName(),
    occupation: faker.name.jobTitle(),
    catchPhrase: faker.company.catchPhrase()
  },
  {
    name: faker.name.findName(),
    occupation: faker.name.jobTitle(),
    catchPhrase: faker.company.catchPhrase()
  },
  {
    name: faker.name.findName(),
    occupation: faker.name.jobTitle(),
    catchPhrase: faker.company.catchPhrase()
  },
  {
    name: faker.name.findName(),
    occupation: faker.name.jobTitle(),
    catchPhrase: faker.company.catchPhrase()
  }
]


// Movies
const movies = [
  {
    title: faker.commerce.productName(),
    genre: faker.commerce.productAdjective(),
    plot: faker.commerce.productDescription()
  },
  {
    title: faker.commerce.productName(),
    genre: faker.commerce.productAdjective(),
    plot: faker.commerce.productDescription()
  },
  {
    title: faker.commerce.productName(),
    genre: faker.commerce.productAdjective(),
    plot: faker.commerce.productDescription()
  },
  {
    title: faker.commerce.productName(),
    genre: faker.commerce.productAdjective(),
    plot: faker.commerce.productDescription()
  },
  {
    title: faker.commerce.productName(),
    genre: faker.commerce.productAdjective(),
    plot: faker.commerce.productDescription()
  },
  {
    title: faker.commerce.productName(),
    genre: faker.commerce.productAdjective(),
    plot: faker.commerce.productDescription()
  }
]


Celebrity
  .create(celebrities)
  .then(all => {
    console.log(yellow(`Created ${ all.length } celebrities`))
    mongoose.connection.close()
  })
  .catch(err => console.error(err))


Movie
  .create(movies)
  .then(all => {
    console.log(yellow(`Created ${ all.length } movies`))
    mongoose.connection.close()
  })
  .catch(err => console.error(err))