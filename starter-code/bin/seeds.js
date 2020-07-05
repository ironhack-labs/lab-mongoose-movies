// Import of the model Recipe from './models/Recipe.model.js'
const Celebrity = require('../models/Celebrity.model');

// To insert in "bin/seeds.js"

const celebrities = [
    {
      name: 'Jennifer Aniston',
      ocupation: 'Actress',
      catchPhrase: 'Sayonara baby'
    },
    {
      name: 'Jennifer Lawrence',
      ocupation: 'Receptionist',
      catchPhrase: 'My home is your home'
    },
    {
      name: 'Ashton Cutcher',
      ocupation: 'Actor',
      catchPhrase: 'If you want it, come and get it'
    }
  ];
  
  // Add here the script that will be run to actually seed the database (feel free to refer to the previous lesson)

  Celebrity.deleteMany({})
    .then(() => 
        Celebrity.create(celebrities))
        .then(() => console.log('celebrites added', celebrities))
        .catch((error) => console.log(error))
    

// Import of the model Recipe from './models/Recipe.model.js'
const Movie = require('../models/Movie.model');

// To insert in "bin/seeds.js"

const movies = [
    {
      title: 'Dark',
      genre: 'mystery',
      plot: 'thats it'
    },
    {
      title: 'I dont know',
      genre: 'comedy',
      plot: 'yes it is'
    },
    {
      title: 'this is a title',
      genre: 'this is a genre',
      plot: 'this is a plot'
    }
  ];
  
  // Add here the script that will be run to actually seed the database (feel free to refer to the previous lesson)

  Movie.deleteMany({})
    .then(() => 
        Movie.create(movies))
        .then(() => console.log('movies added', movies))
        .catch((error) => console.log(error))
    