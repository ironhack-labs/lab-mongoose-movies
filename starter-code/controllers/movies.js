const Movie = require("../models/Movie")


// C

exports.formMovie = (req, res) => { res.render ("movies/new") }

exports.createMovie = async (req, res) => {
    const { title, genre, plot } = req.body
    if (title === "" || genre === "" || plot === "") {
        return res.render("movies/new", { error: "Missing fields" })
    } else {
        await Celebrity.create({
            title,
            genre,
            plot
        })
        res.redirect('/')
    }
}


// R

exports.callMovies = async (req, res, next) => {
    try {
        const allMovies = await Movie.find()
        res.render("movies", {allMovies}) 
    }
    catch(err){
        next(err)
    }
}

exports.moviesDetails = async (req, res) => {
    const movie = await Movie.findById(req.params.movieID)
    res.render("movies/show", movie)
}


// U

exports.formUpdateMovie = async (req, res) => { 
    const movieID = req.params.movieID
    const movie = await Movie.findById(movieID)
    res.render ("movies/update", movie)
}


exports.updateMovie = async (req, res) => {
    const { title, genre, plot } = req.body
    await Movie.findByIdAndUpdate(req.params.movieID, {
        title,
        genre,
        plot
    }, {new: true})
    res.redirect('/')
}


// D

exports.deleteMovie = async(req, res) => {
    const { movieID } = req.params
    await Movie.findByIdAndRemove(movieID)
    res.redirect('/')
}