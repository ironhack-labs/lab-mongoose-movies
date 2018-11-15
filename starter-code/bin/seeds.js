const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
// const Movie = require('../models/movie')

const dbName = 'movies-projectOne';
mongoose
  .connect(`mongodb://localhost/${dbName}`, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
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

// 
  // Celebrity.create(celebrities, (err) => {
  //   if (err) { throw(err) }
  //   console.log(`added ${celebrities.length} celebrities`)
  //   mongoose.connection.close
  // });

  Celebrity.create(celebrities)
  .then((celebrityList) => {
    console.log('Success ====== ', celebrityList)
  })
  .catch(err => {
    console.log('err creating celebs ------ ', err);
  });

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