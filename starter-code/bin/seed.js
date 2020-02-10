const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model');
const Movie = require('../models/movie.model');

const dbTitle = 'mongoose-crud-hell';
mongoose.connect(`mongodb://localhost/${dbTitle}`);

Celebrity.collection.drop()
Movie.collection.drop()


const celebrities=[
  {
    "name": "Miguel Hernández",
    "occupation": "Poet",
    "catchPhrase": "Ni es sangre, ni es juventud",
  },{
    "name": "Miquel Montoro",
    "occupation": "Payés",
    "catchPhrase": "OSTIA PILOTES, Q SON DE BONES, M'ENCANTEN"
  },{
    "name": "Mariano Rajoy",
    "occupation": "presi",
    "catchPhrase": "los chuchesssssss"
  }
]

const movies=[
  {
    "title": "Una peli intensa",
    "genre": "Indie",
    "plot": "Una movida",
  },{
    "title": "Una peli graciosa",
    "genre": "Risa",
    "plot": "Una mofa",
  },{
    "title": "Una peli amorosa",
    "genre": "romantica",
    "plot": "uf que rayada, me ha dejado la Judith",
  }
]

Celebrity.create(celebrities, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${celebrities.length} cels`)
  mongoose.connection.close();
});

Movie.create(movies, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close();
});
