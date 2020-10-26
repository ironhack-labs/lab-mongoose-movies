const express = require('express');
const { findByIdAndRemove } = require('../models/Celebrity');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index.hbs');
});


/*renderizado de las dos bases de datos*/

    // celebs

router.get('/celebrities', async (req, res, next)=>{
  try {
    const allCelebrities= await Celebrity.find();

    res.status(200).render('celebrities/index', {allCelebrities});
    
  } catch (error) {
    console.log('Error while listing our celebrities: ', error);
  }
});

    //movies

router.get('/movies', async (req, res, next)=>{
  try {
    const allMovies= await Movie.find();

    res.status(200).render('movies/index', {allMovies});
    
  } catch (error) {
    console.log('Error while listing our movies: ', error);
  }
});


/*creación de un documento nuevo en ambas colecciones*/


    //celebs

router.get('/celebrities/new', (req, res, next)=> {
  res.render('celebrities/new');
});

router.post('/celebrities', async(req,res,next)=>{
    
  try {
    const {name, ocupation, catchPhrase} = req.body;
  
    const newCeleb = await Celebrity.create({name, ocupation, catchPhrase});
    
    res.redirect('/celebrities');
  } catch (error) {
    res.render('celebrities/new');
  }
});

    //movies

router.get('/movies/new', (req, res, next)=> {
  res.render('movies/new');
});

router.post('/movies', async(req,res,next)=>{
    
  try {
    const {title, genre, plot} = req.body;
  
    const newMovie = await Movie.create({title, genre, plot});
    
    res.redirect('/movies');
  } catch (error) {
    res.render('movies/new');
  }
});


/*borrado de documento en ambas colecciones*/

    //celebs

router.post('/celebrities/:_id/delete', async(req,res,next)=>{
    
  try {
    
   await Celebrity.findByIdAndRemove(req.params._id);
    
    res.redirect('/celebrities');
  } catch (error) {
    console.log('Error while trying to erase this celebrity: ', error);
  }
});

    //movies

router.post('/movies/:_id/delete', async(req,res,next)=>{

  try {
    
    await Movie.findByIdAndRemove(req.params._id);
    
    res.redirect('/movies');
  } catch (error) {
    console.log('Error while trying to erase this movie: ', error);
  }
});


/*editar documentos en ambas colecciones*/

    //celebs
router.get('/celebrities/:_id/edit', async (req,res,next)=>{
  try {

    const editCeleb= await Celebrity.findById(req.params._id);

    res.status(200).render('celebrities/edit', {editCeleb});

  } catch (error) {
    console.log('Error while looking for this celebrity: ', error);
  }
  
});

router.post("/celebrities/edit", async (req, res, next) => {
  
  try {
    const  {name, ocupation, catchPhrase}=req.body;

    const editedCeleb =await Celebrity.findByIdAndUpdate(req.query.celebrity_id,  {name, ocupation, catchPhrase}, {new:true});

    res.redirect('/celebrities');
    
  } catch (error) {
    console.log('Error while editing this celebrity: ', error);
  }
  
});

    //movies


router.get('/movies/:_id/edit', async (req,res,next)=>{
  try {

    const editMovie= await Movie.findById(req.params._id);

    res.status(200).render('movies/edit', {editMovie});

  } catch (error) {
    console.log('Error while looking for this movie: ', error);
  }
  
});

router.post("/movies/edit", async (req, res, next) => {
  
  try {
    const {title, genre, plot} = req.body;

    const editedMovie =await Movie.findByIdAndUpdate(req.query.movie_id, {title, genre, plot}, {new:true});

    res.redirect('/movies');
    
  } catch (error) {
    console.log('Error while editing this movie: ', error);
  }
  
});

/*encontar objeto por id y renderizar detalles*/ 

    //celebs

router.get('/celebrities/:_id',async (req, res, next)=>{
  try {
    const selectedCelebrity= await Celebrity.findById(req.params._id);

    res.status(200).render('celebrities/show', {selectedCelebrity});
    
  } catch (error) {
    console.log('Error while looking for this celebrity: ', error);
  }
});


    //movies

router.get('/movies/:_id',async (req, res, next)=>{
  try {
    const selectedMovie= await Movie.findById(req.params._id);

    res.status(200).render('movies/show', {selectedMovie});
    
  } catch (error) {
    console.log('Error while looking for this movie: ', error);
  }
});

module.exports = router;
