const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity')
const Movie = require('../models/movie')

/* GET home page */
router.get('/', (req, res, next) => { res.render('index') })

//Celebrities


//List Celebrities
router.get('/celebrities', (req, res) => {

  Celebrity.find()
    .then(allCelebrities => res.render('celebrities/index', {allCelebrities}))
    .catch(err => console.log("Error en la BBDD", err))
  
})

//Celebrity Details

router.get('/celebrities/show/:id', (req, res) => {
     
  Celebrity.findById(req.params.id)

    .then(theCelebrity => res.render('celebrities/show', theCelebrity))
    .catch(err => console.log("Error en la BBDD", err))

})

//Create Celebrity

router.get('/celebrities/new', (req, res) => { res.render('celebrities/new') })
router.post('/celebrities/new', (req, res) => {
  
  const { name, occupation, catchPhrase } = req.body
  
  Celebrity
    .create({ name, occupation, catchPhrase })
    .then( () => res.redirect('/celebrities'))
    .catch(err => console.log("Error en la BBDD", err))
  
})
  
//Delete Celebrity

  router.get('/celebrities/:id/delete', (req, res) => {

    Celebrity
      .findByIdAndRemove(req.params.id)
      .then(() => res.redirect('/celebrities'))
      .catch(err => console.log("Error en la BBDD", err))

  })


  //Edit Celebrities

  router.get('/celebrities/edit', (req, res) => {

    Celebrity
      .findById(req.query.celebrityId)
      .then(theCelebrity => res.render('celebrities/edit-form', theCelebrity))
      .catch(err => console.log("Error en la BBDD", err))

  })

  router.post('/celebrities/edit/:celebrityId', (req, res) => {

    const {name, occupation, catchPhrase } = req.body

    Celebrity
      .findByIdAndUpdate(req.params.celebrityId, {name, occupation, catchPhrase }, {new: true})
      .then(() => res.redirect('/celebrities'))
      .catch(err => console.log("Error en la BBDD", err))

  })


//Movies

//List Movies
router.get('/movies', (req, res) => {

  Movie.find()
    .then(allmovies => res.render('movies/index', {allmovies}))
    .catch(err => console.log("Error en la BBDD", err))

})

//Movie Details

router.get('/movies/show/:id', (req, res) => {

  Movie.findById(req.params.id)

    .then(allmovies => res.render('movies/show', allmovies))
    .catch(err => console.log("Error en la BBDD", err))

})

//Create Movie

router.get('/movies/new', (req, res) => {
  res.render('movies/new')
})
router.post('/movies/new', (req, res) => {

  const {title,genre,plot} = req.body

  Movie
    .create({title,genre,plot})
    .then(() => res.redirect('/movies'))
    .catch(err => console.log("Error en la BBDD", err))

})

//Delete Movie

router.get('/movies/:id/delete', (req, res) => {

  Movie
    .findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/movies'))
    .catch(err => console.log("Error en la BBDD", err))

})


//Edit Movie

router.get('/movies/edit', (req, res) => {

  Movie
    .findById(req.query.movieId)
    .then(theMovie => res.render('movies/edit-form', theMovie))
    .catch(err => console.log("Error en la BBDD", err))
    
})

router.post('/movies/edit/:movieId', (req, res) => {

  const {title,genre,plot} = req.body

  Movie
    .findByIdAndUpdate(req.params.movieId, {title,genre,plot},{new:true})
     .then(() => res.redirect('/movies'))
    .catch(err => console.log("Error en la BBDD", err))

})




module.exports = router;
