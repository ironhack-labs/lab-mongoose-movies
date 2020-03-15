const express = require('express');
const movieRouter  = express.Router();
const Movie = require('../models/movie')
const Celebrity = require('../models/celebrity')

// Page with list of all movies
movieRouter.get('/',(req,res,next) =>{
Movie.find()
.then(movies => {
res.render('./movies/movies',{movies:movies})
})
.catch(err => console.log('We have the following error: ', err))
})

// Get to the form to add a new movie
movieRouter.get('/new',(req,res,next) => {
Celebrity.find()
.then(celebrities => {
res.render('./movies/new-movie',{celebrities});
})
})

// Add a new movie to the list
movieRouter.post('/create',(req,res,next) => {
const {title,genre,plot,cast} = req.body
Movie.create({title,genre,plot,cast})
.then(movie => {
console.log('The following movie was added: ',movie)
res.redirect('/movies');
})
.catch(err => console.log(err))
})

// Rout to show the details of every movie
movieRouter.get('/:id',(req,res,next) => {
const celebrities =  Celebrity.find()
const movies = Movie.findOne({'_id': req.params.id}).populate('cast')
Promise.all([movies,celebrities])
.then(result => { 
res.render('./movies/movie-details',{ movie: result[0],celebrity: result[1]})
})
.catch(err => console.log(err))
})

// Rout to delete a movie
movieRouter.post('/:id/delete',(req,res,next) => {
Movie.findByIdAndRemove(req.params.id)
.then(movie => res.redirect('/movies'))
.catch(err => console.log(err))})

// Rout to page to edit a movie
movieRouter.get('/:id/edit',(req,res,next) => {
const celebrities =  Celebrity.find()
const movieEdit = Movie.findById(req.params.id)
Promise.all([celebrities,movieEdit])
.then(result => {
res.render('./movies/edit-movie',{celebrities: result[0],movie: result[1]})})
.catch(err => console.log(err))
})

// Rout to post the editing of a movie
movieRouter.post("/:id", (req, res, next) => {
const { title, genre, plot, cast } = req.body;    
Movie.updateOne({ _id: req.params.id }, { $set: { title, genre, plot } })
Movie.updateOne({ _id: req.params.id }, { $push: { cast: cast } })
.then(() => res.redirect("/movies"))
.catch(err => next(err));
  });
  

module.exports = movieRouter;