const express = require('express');
const router  = express.Router();

// const Celeb = require('../models/Celeb');
// const Movie = require('../models/Movie');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// router.get('/celebrities', (req, res, next) => {
//   Celeb.find({}).then( celebrities => {
//     res.render('celebs/index', {celebrities});
//   })
// });

// router.get('/celebrities/new', (req, res, next) => {
//   res.render('celebs/new');
// });

// router.post('/celebrities/new', (req, res, next) => {
//   const {name, occupation, catchPhrase} = req.body;
//   new Celeb({name, occupation, catchPhrase})
//   .save().then( celebrity => {
//     console.log("Celebritie sucessfully created!");
//     res.redirect('/celebrities');
//   });
// });

// /* CR(U)D: Update the book, show update form  */
// router.get('/celebrities/edit/:id', (req,res) => {
//   Celeb.findById(req.params.id).then(celebrity => {
//     res.render('celebs/edit',{celebrity});;
//   })
// })

// /* CR(U)D: Update the book in DB */
// router.post('/celebrities/edit/:id', (req,res) => {
//   const {name, occupation, catchPhrase} = req.body;
//   Celeb.findByIdAndUpdate(req.params.id,{name, occupation, catchPhrase})
//       .then( celebrity => {
//         res.redirect('/celebrities')
//       })
// })


// router.get('/celebrities/delete/:id',(req,res) => {
//   Celeb.findByIdAndRemove(req.params.id, () => res.redirect('/celebrities'));
// })


// router.get('/celebrity/:id', (req, res, next) => {
//   Celeb.findById(req.params.id).then( celebrity => {
//     res.render('celebs/show', {celebrity});
//   })
// });


//////////////

// router.get('/movies', (req, res, next) => {
//   Movie.find({}).then( movies => {
//     res.render('movies/index', {movies});
//   })
// });

// router.get('/movies/new', (req, res, next) => {
//   res.render('movies/new');
// });

// router.post('/movies/new', (req, res, next) => {
//   const {title, genre, plot} = req.body;
//   new Movie({title, genre, plot})
//   .save().then( celebrity => {
//     console.log("Movie sucessfully created!");
//     res.redirect('/movies');
//   });
// });

// /* CR(U)D: Update the book, show update form  */
// router.get('/movies/edit/:id', (req,res) => {
//   Movie.findById(req.params.id).then(movie => {
//     res.render('movies/edit',{movie});;
//   })
// })

// /* CR(U)D: Update the book in DB */
// router.post('/movies/edit/:id', (req,res) => {
//   const {title, genre, plot} = req.body;
//   Movie.findByIdAndUpdate(req.params.id,{title, genre, plot})
//       .then( movie => {
//         res.redirect('/movies')
//       })
// })


// router.get('/movies/delete/:id',(req,res) => {
//   Movie.findByIdAndRemove(req.params.id, () => res.redirect('/movies'));
// })


// router.get('/movie/:id', (req, res, next) => {
//   Movie.findById(req.params.id).then( movie => {
//     res.render('movies/show', {movie});
//   })
// });



module.exports = router;
