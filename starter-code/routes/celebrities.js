const express = require('express');
const router  = express.Router();
const celebrities = require('../models/celebrities')
const movies  = require('../models/movies');
const uploadMagic = require('../config/cloudinary-setup');

/* GET home page */
router.get('/celebrities/index', (req, res, next) => {
  celebrities.find().populate('movie')
    .then((theCelebsFromDB)=>{
      res.render('celebrities/index', {allCelebs: theCelebsFromDB})
    })
    .catch((err)=> {
      next(err)
    })
 
});

//button on edit celebrities
router.get('/celebrities/:id', (req, res, next) => {
  celebrities.findById(req.params.id).populate('movie')
    .then((singleCeleb)=>{
      
      res.render('celebrities/detailedPage', {oneCeleb: singleCeleb})
    })
    .catch((err)=> {
      next(err)
    })
 
});

router.get('/celebrities/create/new', (req, res, next) => {
  movies.find()
    .then(allTheMovies=> {
      res.render('celebrities/newCeleb', {movies: allTheMovies})

    })
    .catch(err => {
      next(err)
    })
});

//button at create new celebrity
router.post('/celebrities',uploadMagic.single('image'), (req, res, next) => {
  let name = req.body.name;
  let occupation = req.body.occupation;
  let catchPhrase = req.body.catchPhrase;
  let img = req.file.url;
  let movie = req.body.movies;

  celebrities.create({
    name: name,
    occupation: occupation,
    catchPhrase: catchPhrase,
    image: img,
    movie: movie
  })
  .then((newlyCreatedCeleb) => {
    console.log(newlyCreatedCeleb);
    req.flash('success', 'New celebrity added successfully');
    res.redirect('/celebrities/index');
  })
  .catch(err => {
    next(err)
  })
   
})


router.post('/celebrities/:id/delete', (req, res, next)=>{
  celebrities.findByIdAndRemove(req.params.id)
    .then(()=>{
      req.flash('success', 'Celebrity removed successfully');
      res.redirect('/celebrities/index');
    })
    .catch((err)=>{
        next(err);
    })
})

router.get('/celebrities/:id/edit', (req,res, next) => {
  celebrities.findById(req.params.id) 
    .then((hotFromDB) => {
      movies.find()
        .then((moviesToEdit)=> {
          
          res.render('celebrities/edit', {celebToEdit: hotFromDB, movies: moviesToEdit})
        })
    })
    .catch((err)=>{
      next(err);
  })
})

router.post('/celebrities/:id', (req,res, next) => {
  
  celebrities.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      req.flash('success', 'Celebrity modified successfully');
      res.redirect('/celebrities/'+req.params.id)
    })
    .catch((err)=>{
      next(err);
  })
})

//celebrities quick create
router.get("/celebrities-quick-create", (req, res, next) => {
 res.render('celebrities/quickCelebAdd');
});

router.get("/celebrities-quick-info", (req, res, next) => {
  celebrities.find()
    .then(listOfCelebs => {
      res.json(listOfCelebs);
    })
    .catch(err => {
      next(err);
    });
});

router.post("/celebrities-quick-create", (req, res, next) => {
 ; 
  let name = req.body.name;
  let occupation = req.body.occupation;
  let catchPhrase = req.body.catchPhrase;
  let famousFor = req.body.famousFor;



  celebrities.create({
    name: name,
    occupation: occupation,
    catchPhrase: catchPhrase,
    famousFor: famousFor,
   
  })
    .then(() => {
      res.json({message: 'Successfully created an animal'})
    })
    .catch(err => {
      res.json(err);
    });
});







module.exports = router;