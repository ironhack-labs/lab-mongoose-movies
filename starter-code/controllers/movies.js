const Movie = require("../models/Movie")


exports.listMovies = async(req, res, next) => {
    const allMovies = await Movie.find()
    res.render("movies/index", {allMovies})
}

//Create
exports.newMovie = async(req, res) => {
    res.render('movies/add');
}

exports.newMoviePost = async(req, res) => {
    const {
        title,
        genre,
        plot
    } = req.body
    if (title === "" || genre === "" || plot === "") {
        res.render("movies/add", {
            error: "Missing fields"
        })
    } else {

        await Movie.create({
            title,
            genre,
            plot
        })
        res.redirect('/')
    }
}


//Update
exports.updateMovie = async(req, res) => {
    const movie = await Movie.findById(req.params.movieId);
    res.render('movies/edit', movie)
}


exports.updateMoviePost = async(req, res) => {
    const {
        title,
        genre,
        plot
    } = req.body

    const {
        movieId
    } = req.params

    await Movie.findByIdAndUpdate(movieId, {
        title,
        genre,
        plot
    })

    res.redirect('/')    
}


//Details
exports.detailMovie = async(req, res, next) => {
    const movie = await Movie.findById(req.params.movieId)
    res.render("movies/detail", movie)
}


//Delete
exports.deleteMovie = async(req, res) => {
    const {
        movieId
    } = req.params
    await Movie.findByIdAndRemove(movieId)
    res.redirect('/')
}