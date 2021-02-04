const mongoose  = require("mongoose");
const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/Movie.model");

require("../config/db.config")

const data = [
  {
    name: "Elon Musk",
    occupation: "Entrepeneur",
    catchPhrase:
      "When something is important enough, you do it even if the odds are not in your favor.",
  },
  {
    name: "Jeff Bezos",
    occupation: "Entrepeneur",
    catchPhrase:
      "If you double the number of experiments you do per year you're going to double your inventiveness.",
  },
  {
    name:"Robert Downey Jr",
    occupation:"Actor",
    catchPhrase:
      "Worrying is like praying for something that you dont want to happen.",
  },
];

const movies = [
  {
    title: "Conqueror Mars",
    genre: "Biography",
    plot: "The bigger proyect that Elon Musk want to do.",
  },
  {
    title: "Everything store",
    genre: "Biography",
    plot: "Success history",
  },
  {
    title: "Iron Man",
    genre: "Sci-fi",
    plot: "Super hero movie",
  },
];
//=========================add Celebritie at DB=============================================

Celebrity.deleteMany()
    .then(() =>{
        Celebrity.create(data)
          .then((celebrities) => console.log(`Created: ${celebrities}`))
          // .finally(() => {
          //     //mongoose.connection.close()
          //     .then(() => console.log("Disconected"))
          // })
          .catch((e) => next(e));
            
    })
//=========================add Movies at DB=============================================
  Movie.deleteMany().then(() => {
    Movie.create(movies)
      .then((movies) => console.log(`Created: ${movies}`))
      .finally(() => {
        mongoose.connection.close().then(() => console.log("Disconected"));
      })
      .catch((e) => next(e));
  });
