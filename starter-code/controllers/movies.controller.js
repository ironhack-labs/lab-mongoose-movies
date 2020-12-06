const Movie = require("../models/movies")

const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find()
        res.render("movies/index", { movies })
    } catch (e) {
        console.error(e)
    }
}

const showMovieForm = async (req, res) => {
  res.render("movies/new");
};

const createMovie = async (req,res)=>{
  try{
    await Movie.create(req.body)
    const movies = await Movie.find()
    res.render("movies/index", {movies})
  }catch(e){
    res.render("movies/new")
    return e
  }
}
const getDetails = async (req,res) => {
  try{
    const {movieId} = req.params;
    const movie = await Movie.findById(movieId);
    res.render("movies/show", movie)
  }catch(e){
    console.error(e)
  }
}

const deleteMovie = async (req,res) =>{
  try{
    const id = req.params.movieId;
    const removeMovie = await Movie.findByIdAndRemove(id)
    console.log("removeMovie", removeMovie)
    res.redirect('/movies')
  }catch(e){
    next()
    console.error(e)
  }
}

const showMovieUpdate = async (req, res) =>{
  try{
    const {movieId} = req.params;
    const editMovie = await Movie.findById(movieId);
    res.render("movies/edit", editMovie)
  }catch(e){

    return e
  }
}

const updateMovie = async (req,res)=>{
  try{
    const {movieId} = req.params;
    const {title,genre,plot} = req.body;
    const updateMovie = await Movie.findByIdAndUpdate(movieId,{title,genre,plot},{new:true})
    console.log(updateMovie)
    res.redirect('/movies')
  }catch(e){

    return e
  }
}
module.exports = {
  getMovies,
  getDetails,
  showMovieForm,
  createMovie,
  deleteMovie,
  showMovieUpdate,
  updateMovie
}