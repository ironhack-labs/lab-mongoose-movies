const express = require('express');
const router = express.Router();
const Movie = require('../models/movie')
/* GET users listing. */
// router.get('/add', function (req, res, next) {
//   //here we display the books 
//   res.render('book-add')
// });
//route and a views Alle anzeigen 
// GET /celebs
router.get('/', function (req, res, next) {
  Movie.find().then((dataWhatever) => {
    console.log(dataWhatever)
    res.render('movies/index', { movies: dataWhatever }) // takes /goes to hbs
  })
    .catch((error) => {
      console.log(error);
    })
});


router.get('/new', (req, res, next) => {
  Movie.findOne({ _id: req.query.movies_id })
    .then((mov) => {
      // console.log("celeb : ", celeb)
      res.render("movies/new", { mov });
    })
    .catch((error) => {
      console.log("something is wrong", error);
    })
});

// /celebs/create new
router.post('/', function (req, res, next) {
  const { title, genre, plot } = req.body; // safer to put it into an object, because the browser wouldn't show
  // console.log("name", name)
  const newMovie = new Movie({
    title,
    genre,
    plot
  })
  newMovie.save()  // could use Celebrity.create then I don't need variable const
    .then(() => {
      res.redirect('movies');
    })
    .catch((error) => {
      console.log(error);
      res.render('movies/new')
    })
});

router.get('/:celeb_id/edit', (req, res, next) => {
  Movie.findById(req.params.celeb_id).then((result) => {
    res.render("movies/edit", result);
  })
    .catch((error) => {
      console.log("something is wrong", error);
    })
})
// edit celeb
router.post('/:celeb_id', function (req, res, next) {
  const { title, genre, plot } = req.body; // safer to put it into an object, because the browser wouldn't show
  // console.log("name", name)

  Movie.update({ _id: req.params.celeb_id }, {
    title,
    genre,
    plot
  })  // could use Celebrity.create then I don't need variable const
    .then(() => {
      res.redirect('/movies');
    })
    .catch((error) => {
      console.log(error);
      res.render('movies/new')
    })
});

router.get('/:id/delete', (req, res, next) => {
  console.log(req.params.id)

  Movie.findOneAndDelete({ "_id": req.params.id })
    .then((celeb) => {
      // res.render("book-delete", { book });
      res.redirect("/movies")
    })
    .catch((error) => {
      console.log("something is wrong", error);
    })
});

router.get('/:Id', (req, res, next) => {
  Movie.findOne({ "_id": req.params.Id })
    .then(mov => {
      res.render("movies/show", { movie: mov }); //takes/goes to hbs
    })
    .catch((error) => {
      console.log(error);
    })
});









module.exports = router;