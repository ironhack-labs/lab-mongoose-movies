const express = require ('express');
const router = express.Router();
const Movie = require ('../models/movie');

router.get('/movies', (req, res, next) => {
    Movie.find({}, (err, mov) => {
      if (err) { return next(err); }
      res.render('movies/index', { movies: mov })
       });
  });

  router.get('/movies/new', (req, res, next) => {
    res.render('movies/new')
  
  })

  router.post('/movies/new', (req, res, ) => {
    const movie = new Movie (req.body)
    movie.save()
    .then(c => res.redirect("/movies"))
  .catch(e => res.redirect("/movies/new"))
})


  router.get('/movies/:id', (req, res, next)=>{
    const id = req.params.id
    Movie.findById(id)
        .then(movie => {
            res.render('movies/show', movie)
        })
        .catch(err=>{
            next.call
            return err
        })
})


router.post("/movies/:id/delete", (req, res, next) => {
  const id = req.params.id
  Movie.findByIdAndRemove(id)
  .then(() => {
   res.redirect("/movies");
  }) 
  .catch((e)=> next(e));
});
  


module.exports = router;