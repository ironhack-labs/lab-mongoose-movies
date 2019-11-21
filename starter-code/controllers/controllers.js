const Celebrity = require("../models/celebrity")
const Movie = require("../models/movie")
//CELEBRITIES
exports.showCelebrities = (req, res) => {
    Celebrity.find()
        .then(celebrities => res.render("celebrities/index", {celebrities}))
        .catch(err => console.error(err))
}

exports.getCelebrity = (req, res) => {
    const { id } = req.params
    Celebrity.findById(id)
        .then(celebrity => {
            res.render("celebrities/show", {celebrity})})
        .catch(err => console.error(err))
}

exports.addCelebrity = (req, res) => {
    res.render("celebrities/new")
}

exports.newCelebrity = (req, res) => {
    const {name, occupation, catchPhrase} = req.body
    Celebrity.create({name, occupation, catchPhrase})
        .then(res.redirect("/celebrities"))
        .catch(err => console.error(err))
}

exports.deleteCelebrity = (req, res) => {
    const { id } = req.params
    Celebrity.findByIdAndRemove(id)
        .then(res.redirect("/celebrities"))
        .catch(err => console.error(err))
}

//MOVIES
exports.showMovies = (req, res) => {
    Movie.find()
        .then(movies => res.render("movies/index", {movies}))
        .catch(err => console.error(err))
}

exports.getMovie = (req, res) => {
    const { id } = req.params
    Movie.findById(id)
        .then(movie => {
            res.render("movies/show", {movie})})
        .catch(err => console.error(err))
}

exports.addMovie = (req, res) => {
    res.render("movies/new")
}

exports.newMovie = (req, res) => {
    const {title, genre, plot} = req.body
    Movie.create({title, genre, plot})
        .then(res.redirect("/movies"))
        .catch(err => console.error(err))
}

exports.deleteMovie = (req, res) => {
    const { id } = req.params
    Movie.findByIdAndRemove(id)
        .then(res.redirect("/movies"))
        .catch(err => console.error(err))
}