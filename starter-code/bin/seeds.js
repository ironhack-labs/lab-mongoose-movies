// const celebrityModel = require("./../models/Celebrity");
// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/celebrity");

// const celebrityArray = [
//   {
//     name: "Rone",
//     occupation: "Artist",
//     catchPhrase:
//       "Il faut que tu t'isoles pour écrire un chapitre comme celui là"
//   },
//   {
//     name: "Ricardo Villalobos",
//     occupation: "Artist",
//     catchPhrase: "My mind goes on speed and I still miss my train"
//   },
//   {
//     name: "Matt Damon",
//     occupation: "Actor",
//     catchPhrase: "It's better to be a fake somebody than a real nobody"
//   }
// ];
// celebrityModel
//   .insertMany(celebrityArray)
//   .then(console.log("Successfully added to the DB"))
//   .catch(err => console.log(err));

const celebrityModel = require("./../models/Celebrity");

const movieModel = require("./../models/Movie");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/celebrity");
const arrayMovie = [
  {
    title: "Le Parrain",
    genre: "Film noir",
    plot:
      "En 1945, à New York, les Corleone sont une des 5 familles de la mafia. Don Vito Corleone, `parrain' de cette famille, marie sa fille à un bookmaker. Sollozzo, `parrain' de la famille Tattaglia, propose à Don Vito une association dans le trafic de drogue, mais celui-ci refuse. Sonny, un de ses fils, y est quant à lui favorable. Afin de traiter avec Sonny, Sollozzo tente de faire tuer Don Vito, mais celui-ci en réchappe."
  },
  {
    title: "Le Parrain 2",
    genre: "Film noir",
    plot:
      "En 1945, à New York, les Corleone sont une des 5 familles de la mafia. Don Vito Corleone, `parrain' de cette famille, marie sa fille à un bookmaker. Sollozzo, `parrain' de la famille Tattaglia, propose à Don Vito une association dans le trafic de drogue, mais celui-ci refuse. Sonny, un de ses fils, y est quant à lui favorable. Afin de traiter avec Sonny, Sollozzo tente de faire tuer Don Vito, mais celui-ci en réchappe."
  },
  {
    title: "Le Parrain 3",
    genre: "Film noir",
    plot:
      "En 1945, à New York, les Corleone sont une des 5 familles de la mafia. Don Vito Corleone, `parrain' de cette famille, marie sa fille à un bookmaker. Sollozzo, `parrain' de la famille Tattaglia, propose à Don Vito une association dans le trafic de drogue, mais celui-ci refuse. Sonny, un de ses fils, y est quant à lui favorable. Afin de traiter avec Sonny, Sollozzo tente de faire tuer Don Vito, mais celui-ci en réchappe."
  }
];
movieModel
  .create(arrayMovie)
  .then(console.log("Successfully added the movies to the db"))
  .catch(err => console.log(err));
