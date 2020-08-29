const Movie = require("../models/Movie")
const Celebrity = require("../models/Celebrity")


exports.index = async(req, res, next) => {
    const allMovies = await Movie.find()
    const allCelebrities = await Celebrity.find()
    res.render("index", {allMovies, allCelebrities})    
}
