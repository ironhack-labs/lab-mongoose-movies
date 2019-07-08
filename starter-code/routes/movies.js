const express = require('express');
const router  = express.Router();

const Movies = require('../models/movies');

router.get('/movies', (req, res, next) => {
  Movies.find()
  .then(movies => {
    res.render('movies/index', { movies });
  })
  .catch(err => console.log(err));
});
// router.get('/movies/new', (req, res, next) => {
//   res.render('movies/new');
// });

// router.post('/movies', (req, res, next) => {
//   const { name, occupation, catchPhrase } = req.body;
//   const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
//   newCelebrity.save()
//   .then(() => {
//     res.redirect('/movies');
//   })
//   .catch((error) => {
//     console.log(error);
//   })
// });
// router.get('/movies/:Id', (req, res, next) => {
//   const { Id } = req.params;
//   Celebrity.findById(Id)
//   .then(celebrity => {
//     res.render('movies/show', celebrity);
//   })
//   .catch(err => console.log(err));
// });

// router.post('/movies/:Id/delete', (req, res, next) => {
//   const { Id } = req.params;
//   Celebrity.findByIdAndRemove(Id)
//   .then(() => {
//     res.redirect('/movies');
//   })  
//   .catch((error) => {
//     console.log(error);
//   })  
// });  
module.exports = router;