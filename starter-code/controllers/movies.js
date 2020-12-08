const Movie = require("../models/Movie.model")
const Celebrity = require("../models/Celebrity.model")

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
    const movie = await Movie.findById(id).populate(
      "stars",
      "name"
    );
        const star = movie.stars
    res.render("movies/show", {movie} )
    } catch (e) {
        console.error(e)
    }
}

const newMovie = async (req, res) => {
    try {
        const actors = await Celebrity.find()
        res.render("movies/new", {actors})
    } catch(err){
        console.error(err)
    }
}

const addMovie = async (req, res) => {
    try {
        const { title, genre, plot, actor } = req.body;
        const addMovies = await Movie.create({ title, genre, plot, stars: actor})
        console.log(addMovies)
        const movies = await Movie.find()
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