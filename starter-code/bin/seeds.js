const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie')

const dbName = 'movies-projectOne';

// mongoose
//   .connect(`mongodb://localhost/${dbName}`, {useNewUrlParser: true})
//   .then(x => {
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//   })
//   .catch(err => {
//     console.error('Error connecting to mongo', err)
//   });

  mongoose
.connect(`mongodb://localhost/${dbName}`, {useMongoClient: true})
.then(() => {
  console.log('Connected to Mongo!')
}).catch(err => {
  console.error('Error connecting to mongo', err)
});
  
const celebrities = [

    {
      name: "Christian Bale",
      occupation: "Pompous Actor",
      catchPhrase: "I have to return some videotapes."


    },
    {
      name: "Kanye West",
      occupation: "Producer",
      catchPhrase: "Everyone likes my music!"
    },
    {
      name: "Stephen Hawking",
      occupation: "Physicist",
      catchPhrase: "No one knows anything."
    }  
]

// const movies = [


// ]

  Celebrity.create(celebrities)
  .then((celebrityList) => {
    console.log('Success ====== ')
  })
  .catch(err => {
    console.log('err creating celebs ------ ');
  });

  Movie.create(movies)
    .then((moviesList) =>{
        console.log('Success --____--')
    })
    .catch(err) => {
      console.log(err)
    }

//   Celebrity.find()
// .then((celebListFromDB) => {
//   moviesArray.forEach(oneMovie => {
//     celebListFromDB.forEach(oneCeleb => {
//       // (oneMovie.celebrity === oneCeleb.name ? oneMovie.celebrity = oneCeleb._id : oneMovie.celebrity;)
//       if (oneMovie.celebrity === oneCeleb.name) {
//         oneMovie.celebrity = oneCeleb._id 
//       } else {
//         oneMovie.celebrity;
//       }
//     })
//   })
//   Movie.create(moviesArray)
//   .then((theMoviesFromDB) => {
//     console.log("success creating movies ======= ", theMoviesFromDB);
//   })
//   .catch("err creating movies ********** ", err);
// })
// .catch(err => {
//   console.log("err getting celebs from db----- ", err);
// })