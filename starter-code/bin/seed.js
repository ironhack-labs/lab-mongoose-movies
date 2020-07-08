require("dotenv").config();
const mongoose = require("mongoose");
const CelebrityModel = require("../model/celebrity");
const MovieModel = require("./../model/movie")

/*  CELEBRITIES COLLECTION SEEDING
************************************

const seedCelebrities = [
  { name: "Dany Trejo", occupation: "Actor", catchPhrase: "Ay" },
  {
    name: "Bob Ross",
    occupation: "painter",
    catchPhrase: "there is no mistakes but happy accidents",
  },
  {
    name: "Rick Astley",
    occupation: "singer",
    catchPhrase: "Never gonna give you up",
  },
];


mongoose
  .connect("mongodb://localhost/starter-code", { useNewUrlParser: true })
  .then((x) => {
    CelebrityModel.create(seedCelebrities)
      .then((dbRes) => console.log(`Seeds created, ${dbRes}`))
      .catch((dbErr) => console.error(dbErr));
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

  */



/* SEEDING MOVIES COLLECTION
****************************



  const seedMovies = [
    {title : "Cloud Atlas" ,
      genre : "Fantasy / Sci-Fi" ,
      plot : "Everything is connected"
    },
    {title : "H2G2" ,
      genre : "adventure" ,
      plot : "The best tips to travel within space"
    },
    {title : "Clue" ,
      genre : "mystery" ,
      plot : "Your very family game's movie"
    }
  ]

  mongoose
  .connect("mongodb://localhost/starter-code", { useNewUrlParser: true })
  .then((x) => {
    MovieModel.create(seedMovies)
      .then((dbRes) => console.log(`Seeds created, ${dbRes}`))
      .catch((dbErr) => console.error(dbErr));
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

  */