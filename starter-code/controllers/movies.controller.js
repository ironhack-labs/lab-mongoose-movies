//require model
const Movie = require("../models/Movie.model")

//Show celebrities
module.exports.list = (req,res,next) =>{
    Movie.find(
        req.query.title ? {title: { $regex: req.query.title, $options: "i" }} : {}
    )
        .then(data => {
            res.render('movies/list_movies', {
                movies: data, 
                movie_search: req.query.title
            })
        })
        .catch (e => next(e))
}


module.exports.show = (req,res,next) =>{
    Movie.findById(req.params.id)
        .then(data => {
            res.render('movies/movie_detail', { ...data.toJSON(), delete: false })
        })
        .catch(e => next(e))
}



//Add movies
module.exports.new = (req,res,next) =>{
    res.render('movies/new_movie')
}
    

module.exports.addNew = (req,res,next) =>{
    Movie.create(req.body)
    .then(data => {
        console.log(`Movie added: ${data.name}`)
        res.redirect('/movies')
    })
    .catch(error => {
        console.log(`Error adding movie: ${error}`)
        res.redirect('/movies/new')
    }
)}

//delete movies
module.exports.delete = (req,res,next) =>{
    Movie.findByIdAndDelete(req.params.id)
    .then(() => {
        console.log(`Movie ${req.params.id} deleted`)
        res.redirect('/movies')
      })
    .catch(error => console.log(`Error deleting movie: ${error}`))
}
    

//Update movies
module.exports.update = (req, res, next) => {
    Movie.findById(req.params.id)
      .then(movie => res.render('movies/update_movie',{movie}))
      .catch(error => {
        console.log(`Error updating movie: ${error}`)
        res.redirect('/movies')
      });
  }

  module.exports.doUpdate =  (req, res, next) => {
    Movie.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(() => {
        console.log(`Movie ${req.params.id} updated`)
        res.redirect('/movies')
      })
      .catch(error => {
        console.log(`Error updating movie: ${error}`)
        res.redirect('/movies/update')
      });
  }