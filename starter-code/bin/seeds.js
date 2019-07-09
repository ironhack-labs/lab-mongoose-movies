// const Celeb = require("../models/celebrity.js");
// const mongoose = require("mongoose");

// let celebArr = [
//   {
//     name: "Mitch",
//     occupation: "Web Developer",
//     catchPhrase: "lets get this bread"
//   },
//   {
//     name: "Drake",
//     occupation: "Rapper",
//     catchPhrase: "ovo gang"
//   },
//   {
//     name: "Rick Sanchez",
//     occupation: "Scientist",
//     catchPhrase: "Wapalabado"
//   }
// ];

// const dbtitle = "celebrity";
// mongoose.connect(`mongodb://localhost/${dbtitle}`);

// Celeb.create(celebArr)
//   .then(celeb => {
//     console.log("The celeb was created and saved", celeb);
//   })
//   .catch(err => {
//     console.log("There was an error", err);
//   });

const Movie = require("../models/movie.js");
const mongoose = require("mongoose");

let movieArr = [
  {
    title: "Mitch & His Mighty Men",
    genre: "Action",
    plot: "Mitcn and his mighty men go around to town and do mighty stuff",
    actor: "Mitch"
  },
  {
    title: "Mitch the Great Wizard",
    genre: "SciFi",
    plot: "Mitch becomes a wizard and does alot of wizard things",
    actor: "Mitch"
  },
  {
    title: "Mitch- The Return",
    genre: "Drama",
    plot: "Mitch returns and does bad add things",
    actor: "Mitch"
  }
];

const dbtitle = "celebrity";
mongoose.connect(`mongodb://localhost/${dbtitle}`);

Movie.create(movieArr)
  .then(movie => {
    console.log("The celeb was created and saved", movie);
  })
  .catch(err => {
    console.log("There was an error", err);
  });
