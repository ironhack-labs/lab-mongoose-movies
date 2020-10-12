require("../config/db.config");

const MovieModel = require("../models/movie.model");
const mongoose = require("mongoose");

let movieArray = [
  {title: "Dark Knight", genre: "action", plot: "Batman does Batman things."},
  {title: "My Neighbour Totoro", genre: "animation", plot: "Girls meet monster. Plus, Catbus."},
  {title: "Aladdin", genre: "animation", plot: "Boy flies on a carpet and has a blue genie in a lamp."}
];

MovieModel.insertMany(movieArray)
  .then(() => {
    console.log("Data Added");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });