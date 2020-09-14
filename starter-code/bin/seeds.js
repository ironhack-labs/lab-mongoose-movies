const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity.model')
const Movie = require('../models/Movie.model')

const dataBase = 'mongocine-db'

mongoose.connect(`mongodb://localhost/${dataBase}`)

//Celebrity.collection.drop()
Movie.collection.drop()
/*
const celebrities = [
  {
    name: "Caroline Abady",
    occupation: "actress",
    catchPhrase: "I have a dog"

  },
  {
    name: "Bruce Abbott",
    occupation: "actor",
    catchPhrase: "It's alive!"

  },
  {
    name: "Jim Abrahams",
    occupation: "singer",
    catchPhrase: "hello dolly!"

  },
  {
    name: "Joss Ackland",
    occupation: "actor",
    catchPhrase: "I'm here"

  }
]

Celebrity.create(celebrities)
    .then(allCelebrities => console.log('There are ',allCelebrities.length, 'celebrities in the DB'))
    .catch(err => console.log('Error: ',err))

*/
    const movies = [
      {
        title: "The Cabinet of Dr. Caligariy",
        genre: "horror",
        plot: "A young man named Francis recounts a fantastic story taking place in a North German town where a number of brutal murders have been occuring. Francis and his friend, Alan, visit a traveling fair where one of the acts is a certain Dr. Caligari's presentation of a hypnotized sleepwalker named Cesare who can tell the future."
      },
      {
        title: "Way Down East ",
        genre: "drama",
        plot: "A naive country girl is tricked into a sham marriage by a wealthy womanizer, then must rebuild her life despite the taint of having borne a child out of wedlock. The callous rich, portrayed by Lennox, think only of their own pleasure. Anna is but a poor country girl whom Lennox tricks into a fake wedding."
    
      },
      {
        title: "The Flapper",
        genre: "comedy",
        plot: "Sixteen-year-old Genevieve 'Ginger' King is living in a very wealthy family in the boring town of Orange Springs, Florida with her younger siblings, where her unchaperoned decision to drink a soda with a young male is considered scandalous."
    
      },
      {
        title: "Dr. Jekyll and Mr. Hyde",
        genre: "horror",
        plot: "Strange Case of Dr Jekyll and Mr Hyde by Robert Louis Stevenson is a narrative about the complexities of science and the duplicity of human nature. Dr Jekyll is a kind, well-respected and intelligent scientist who meddles with the darker side of science, as he wants to bring out his 'second' nature."
    
      }
    ]

    Movie.create(movies)
    .then(allMovies => console.log('There are ',allMovies.length, 'movies in the DB'))
    .catch(err => console.log('Error: ',err)) 