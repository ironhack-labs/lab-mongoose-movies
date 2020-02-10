const mongoose = require('mongoose');
const Celebrity = require("./../models/Celebrity");
const Movie = require("./../models/Movie");

// const dbName = "celebrity-group";


// const celebritiesArr = [
//   {
//     name: "Shakira",
//     occupation: "singer",
//     catchPhrase: "Me gusta el Piquetón",
//   }, {
//     name: "Romeo Santos",
//     occupation: "singer",
//     catchPhrase: "Soy el chico de las poesías",
//   }, {
//     name: "Bad Bunny",
//     occupation: "singer",
//     catchPhrase: "Baby la vida es un ciclo",
//   },
// ];

// mongoose
//   .connect(`mongodb://localhost/${dbName}`, {useNewUrlParser: true, useUnifiedTopology: true})
//   .then( () => {
//     const pr = Celebrity.create(celebritiesArr);
//     return pr;
//   })
//   .then((createdCelebrities) => {
//     console.log(`Created ${createdCelebrities.length} celebrities.`);

//     const pr = mongoose.connection.close();

//     return pr;
//   })
//   .then(() => console.log("Connection closed!"))
//   .catch( (err) => console.error('Error connecting to mongo', err));


const dbName = "movieLibrary";

const moviesArr = [
    {
      title: "Movie 1",
      genre: "Thriller",
      plot: "No idea",
    }, {
      title: "Movie 2",
      genre: "Comedy",
      plot: "Soy el chico de las poesías",
    }, {
      title: "Movie 3",
      genre: "Sad",
      plot: "Baby la vida es un ciclo",
    },
  ];

  mongoose
    .connect(`mongodb://localhost/${dbName}`, {useNewUrlParser: true, useUnifiedTopology: true})
    .then( () => {
      const pr = Movie.create(moviesArr);
      return pr;
    })
    .then((createdMovies) => {
      console.log(`Created ${createdMovies.length} movies.`);

      const pr = mongoose.connection.close();

      return pr;
    })
    .then(() => console.log("Connection closed!"))
    .catch( (err) => console.error('Error connecting to mongo', err));

