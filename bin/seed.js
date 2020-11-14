// REQUIRES
const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity.model')
const chalk = require('chalk')
const faker = require('faker')

// DB CONNECTION
const dbName = 'ironhack-mongoose-movies-lab'
mongoose.connect(`mongodb://localhost/${ dbName }`)

// DEVELOP UTILITIES
const yellow = chalk.bold.yellow

// SEED
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
  }
]


Celebrity
  .create(celebrities)
  .then(all => {
    console.log(yellow(`Created ${ all.length } celebrities`))
    mongoose.connection.close()
  })
  .catch(err => console.error(err))