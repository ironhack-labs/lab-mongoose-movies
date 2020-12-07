const Movies = require("../models/Movies");

const getMovies = async (req, res) => {
  try{
    const movies = await Movies.find();
    //console.log(celebrities);
    res.render("movies/movies",{movies});
  } catch(err){
    res.send(err)
  }
}
const getOneMovie = async (req,res) =>{
  try{
    const { movieId } = req.params
    const movie = await Movies.findById(movieId);
    console.log(movie);
    res.render("movies/show",movie)
  } catch(err){
    res.send(err)
  }
}

const renderNewForm = async (req,res)=>{
  res.render("movies/new")
}

const createMovie = async (req,res) => {
  try{
      console.log(req.body);
      await Movies.create(req.body)
      res.redirect("/movies")
  }catch(err){
    //res.render("new")
    console.error(err);
  }
}

const deleteMovie = async (req,res) =>{
  try{
      const {movieId} = req.params;
      const removeMovie = await Movies.findByIdAndDelete(movieId)
      console.log("Removed",removeMovie);
      res.redirect("/movies")
  }catch(err){
    console.error(err);
  }
}

const renderUpdateMovie = async (req,res)=>{
  try{
    const {movieId} = req.params;
    const editMovie = await Movies.findById(movieId);
    res.render("movies/edit",editMovie)
  }catch(err){
    console.error(err);
  }
}

const updateMovies = async (req,res)=>{
  try{
      const {movieId} = req.params;
      const updateMovies = await Movies.findByIdAndUpdate(movieId, req.body,{
        new:true,
      });
      console.log("Req.body",req.body);
      console.log(updateMovies);
      res.redirect("/movies")
  }catch(err){
    console.error(err);
  }
}

module.exports = {
  getMovies,
  getOneMovie,
  renderNewForm,
  createMovie,
  deleteMovie,
  renderUpdateMovie,
  updateMovies
}
