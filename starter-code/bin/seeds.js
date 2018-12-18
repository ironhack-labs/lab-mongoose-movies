const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");
const Movie = require("../models/movie");

const dbtitle = "lab-mongoose-movies";
mongoose.connect(`mongodb://localhost/${dbtitle}`);

Celebrity.collection.drop();
Movie.collection.drop();

// const celebrities = [
//   {
//     name: "Carlos",
//     occupation: "singer",
//     catchPhrase: "Big Bisou!"
//   },
//   {
//     name: "Mimi",
//     occupation: "actress",
//     catchPhrase: "Gotcha!"
//   },
//   {
//     name: "Lucky",
//     occupation: "draw",
//     catchPhrase: "Pan!"
//   }
// ];

const movies = [
  {
    title: "Planetarim",
    genre: "drama",
    plot:
      "Kate et Laura Barlow, deux jeunes mediums américaines, finissent leur tournée mondiale. Fasciné par leur don, un célèbre producteur de cinéma, André Korben, les engage pour tourner dans un film follement ambitieux"
  },
  {
    title: "Grave",
    genre: "drama",
    plot:
      "Dans la famille de Justine tout le monde est vétérinaire et végétarien. À 16 ans, elle est une adolescente surdouée sur le point d’intégrer l’école véto où sa sœur ainée est également élève."
  },
  {
    title: "Ame & Yuki",
    genre: "dessin animé",
    plot:
      "Hana et ses deux enfants, Ame et Yuki, vivent discrètement dans un coin tranquille de la ville. Leur vie est simple et joyeuse, mais ils cachent un secret : leur père est un homme-loup."
  }
];

// Celebrity.insertMany(celebrities)
//   .then(celebrities => {
//     celebrities.forEach(celebrity => {
//       console.log(`${celebrity.name} added!`);
//     });
//     mongoose.connection.close();
//   })
//   .catch(error => {
//     console.log(error);
//   });

Movie.insertMany(movies)
  .then(movies => {
    movies.forEach(movie => {
      console.log(`${movie.title} added!`);
    });
    mongoose.connection.close();
  })
  .catch(error => {
    console.log(error);
  });
