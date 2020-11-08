const express = require("express")
const router = express.Router()
const Movie = require('../models/movie')


router.get('/movies', async (req, res, next) => {
    const movies = await Movie.find()
    res.render('movies/index', {movies});
  console.log('movies')
    if(!movies){
        console.log("Existe un error") 
  }
  });
  
  
  router.get('/movies/:id', async (req, res) => {
    const id = req.params.id
    const movie = await  Movie.findById(id)
    res.render('movies/show', movie);
   
  });

  router.post('/movies/:id/delete', (req, res)=>{
    const id= req.params.id
    Movie.findByIdAndDelete(id)
   .then(() => res.redirect('/movies'))
   .catch(() => { throw Error('Cannot be deleted.'); });
});

  router.get('/newMovie',  (req, res)=>{
    res.render('movies/newMovie')
  })
 
router.post("/newMovie", async (res, req)=>{
    const { title, genre, plot }= req.body
    console.log(req.body)
    await Movie.create({ title, genre, plot });   
    res.redirect('/')
})


router.get('/movies/:id/edit', (req, res) => {
  MovieModel.findById(req.params.id)
    .then(movie => res.render('movies/edit', movie))
    .catch(() => res.render('movies/edit', { error: 'Try again.' }));
});






module.exports = router