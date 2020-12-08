const Movie = require("../models/Movie");

const getMovies  = async (req, res) => {
    try {
      const movies = await Movie.find();
      res.render("movies", { movies });
    } catch (err) {
      res.send(err);
    }
  };














  module.exports = {
    getMovies
  };