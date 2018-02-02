const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebrities', {useMongoClient: true});

// const Celebrity = require('../models/celebrity');

// celebrities = [
//     {
//     name       : "Britney Spears",
//     occupation      : "Singer",
//     catchPhrase   : "Toxic"
//     },
//     {
//     name       : "Kim Kardashion",
//     occupation      : "Model",
//     catchPhrase   : "Not sure"
//     },
//     {
//     name       : "Kanye West",
//     occupation      : "Rapper",
//     catchPhrase   : "Also not sure"
//     }
// ]

// Celebrity.create(celebrities, (err, docs) => {
//     if (err) {
//       throw err;
//     }
  
//     docs.forEach((celebrities) => {
//       console.log(celebrities.name)
//     });
//     mongoose.connection.close();
//   });

const Movie = require('../models/movie');

movies = [
    {
    title       : "A Bug's Life",
    genre      : "Cartoon",
    plot   : "Bugs just livin'"
    },
    {
    title       : "Shrek",
    genre      : "Drama",
    plot   : "A swamp ogre"
    },
    {
    title       : "Stepbrothers",
    genre      : "Funny",
    plot   : "Their parents get married"
    }
]

Movie.create(movies, (err, docs) => {
    if (err) {
      throw err;
    }
  
    docs.forEach((movies) => {
      console.log(movies.title)
    });
    mongoose.connection.close();
  });