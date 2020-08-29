const Movie = require("../models/Movie")


exports.listMovies = async(req, res, next) => {
    try {
        const movies = await Movie.find()
        res.render("movies/index", {
            movies
        })
    } catch (err) {
        next();
        console.log(err)
    }
}

exports.movieDetails = async(req, res, next) => {
    try {
        const movie = await Movie.findById(req.params.movieID)
        res.render("movies/show", movie)
    } catch (err) {
        next();
        console.log(err);
    }
}

exports.formMovie = async(req, res) => {
    res.render("movies/new")
}

exports.createMovie = async(req, res, next) => {
    try {
        const {
            title,
            genre,
            plot
        } = req.body
        await Movie.create({
            title,
            genre,
            plot
        })
        res.redirect("/movies")
    } catch (err) {
        next();
        console.log(err);
    }
}

exports.deleteMovie = async(req, res, next) => {
    try {
        await Movie.findByIdAndDelete(req.params.movieID);
        res.redirect("/movies")
    } catch (err) {
        next();
        console.log(err);
    }
}

exports.updateForm = async(req, res, next) => {
    try {
        const
            movie = await Movie.findById(req.params.movieID);
        res.render("movies/edit", movie)
    } catch (err) {
        next();
        console.log(err);
    }
}

exports.updateMovie = async(req, res, next) => {
    try {
        const {
            movieID
        } = req.params;
        const {
            title,
            genre,
            plot
        } = req.body;
        await Movie.findByIdAndUpdate(movieID, {
            title,
            genre,
            plot
        });
        res.redirect("/movies")
    } catch (err) {
        next();
        console.log(err);
    }
}