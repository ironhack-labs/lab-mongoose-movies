const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model')
const Anime = require('../models/Anime.model')

const celebrities = [
    {
        name: 'YumYum',
        ocupation: 'Lamberjack cat',
        catchPhrase: 'YumYum owns you all!'
    },
    {
        name: 'Vegeta',
        ocupation: 'Sayajin warrior',
        catchPhrase: 'You insignificant worm!'
    },
    {
        name: 'Light Yagami',
        ocupation: 'Student, terrorrist, serial killer',
        catchPhrase: 'I\'ll be the god of the new world.'
    }
]

const animes = [
  {
    title: 'Kipo and the age of Wonder Beasts',
    genre: 'Adventure',
    plot: 'A girl explores the possibilities in a post-apocalyptic world.'
  },
  {
    title: 'Dragon Ball',
    genre: 'Action, Comedy',
    plot: 'After learning that he is from another planet, a warrior named Goku and his friends are prompted to defend it from an onslaught of extraterrestrial enemies.'
  },
  {
    title: 'Death Note',
    genre: 'Crime',
    plot: 'An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.'
  }
]

const plantSeeds = async (Model, seeds) => {
  try {
    const connect = await mongoose.connect('mongodb://localhost/starter-code', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
    })

    console.log(`Connected to ${connect.connections[0].name}`)

    await Model.create(seeds)

    console.log(`Collection added to database`)
  } catch (error) {
    console.log(error)
  } finally {
    mongoose.connection.close()
  }

}

plantSeeds(Anime, animes)

