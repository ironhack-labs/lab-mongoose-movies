const Movie = require("../models/Movie")

exports.listMovies = async(req, res, next) => {
    const allMovies = await Movie.find()
    res.render("movies/index", allMovies)
}