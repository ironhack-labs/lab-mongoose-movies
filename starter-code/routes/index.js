const express = require("express");
const router = express.Router();
const data = require("../bin/seeds");
const dataMovie = require("../bin/seeds_movie");
const Celebrity = require("../models/celebrity");
const Movie = require("../models/movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

function insertFirstData() {
  Celebrity.insertMany(data)
    .then(celebrities => console.log(celebrities, "data has been inserted"))
    .catch(err => console.log(err, "no data inserted"));
  Movie.insertMany(dataMovie)
    .then(movies => console.log(movies, "movies have been inserted"))
    .catch(err => console.log(err, "no data inserted"));
}

insertFirstData();
module.exports = router;
