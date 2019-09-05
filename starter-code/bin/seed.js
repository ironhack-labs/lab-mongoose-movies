require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

// const celebrities = [
//   {
//     title: "Wondermom !",
//     genre: "Action",
//     plot: "String"
//   },
//   {
//     title: "",
//     genre: "",
//     plot: ""
//   }
// ];

// const celebrityModel = require("./../models/celebrity");

// celebrityModel
//   .insertMany(celebrities)
//   .then(dbRes => console.log("success"))
//   .catch(dbErr => console.log("something went wrong with the db", dbErr));

const movies = [
  {
    title: "Wondermom !",
    genre: "Action",
    plot: "hahaha"
  },
  {
    title: "Aïda",
    genre: "Horror",
    plot: "lalala"
  },
  {
    title: "Once upon a time...",
    genre: "Comedy",
    plot: "lalala"
  }
];

const movieModel = require("./../models/movie");

movieModel
  .insertMany(movies)
  .then(dbRes => console.log(dbRes, "success"))
  .catch(dbErr => console.log("something went wrong with the db", dbErr));
