const Movie = require("../models/Movie.model")

const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find()
        res.render("./movies/index", { movies })
    } catch (e) {
        console.error(e)
    }
}

const getMovie = async (req, res) => {
    try{
    const { id } = req.params;
    const movie = await Movie.findById(id);
    res.render("movies/show", movie)
    } catch (e) {
        console.error(e)
    }
}

const newMovie = async (req, res) => {
    try {
        res.render("movies/new")
    } catch(err){
        console.error(err)
    }
}

const addMovie = async (req, res) => {
    try {
        const { title, genre, plot } = req.body;
        const addMovies = await Movie.create({ title, genre, plot })
        const movies = await Movie.find()
        console
        res.render("./movies/index", {movies})
    } catch(err){
        console.error(err)
        res.render("movies/new")
    }
}

const deleteMovie = async (req, res) =>{
    try {
        const { id } = req.params
        const removeMovies = await Movie.findByIdAndDelete(id);
        res.redirect("/movies/");
    } catch (e) {
        console.error(e)
    }
}

const editMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const movieEddited = await Movie.findById(id);
        res.render("movies/edit", movieEddited)
    } catch (err) {
        console.error(e)
    }
}

const saveMovie = async (req, res) => {
    try {
        const {id} = req.params
        const { title, genre, plot } = req.body;
        const saveMovies = await Movie.findByIdAndUpdate(id,{ title, genre, plot }, {
      new: true,
    })
        const movies = await Movie.find()
        res.render("movies/index", { movies })
    } catch (err) {
        console.error(err)
    }
}


module.exports = { getMovies, getMovie, newMovie, addMovie, deleteMovie, editMovie, saveMovie }