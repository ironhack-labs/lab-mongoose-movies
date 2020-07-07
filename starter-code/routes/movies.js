const express = require('express');
const router = express.Router();
const movieModel = require('./../models/Movie');

router.get('/', (req, res, next) => {
   movieModel
      .find()
      .then((movies) => res.render('movies/index', { movies }))
      .catch(next);
});

router.get('/new', (req, res, next) => {
   res.render('movies/new');
});

router.post('/new', (req, res, next) => {
   const { title, genre, plot } = req.body;
   movieModel
      .create(req.body)
      .then(() => res.redirect('/'))
      .catch(() => res.redirect('/movies'));
});

router.post('/:id/delete', (req, res, next) => {
    movieModel
    .findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/movies'))
    .catch(next);
});

router.get("/:id/edit", async (req, res,next) => {
   movieModel.findById(req.params.id)
   .then(movieToUpdate => res.render("movies/edit", movieToUpdate))
   .catch(next)
});

router.post("/:id/edit", (req, res,next) => {
   movieModel.findByIdAndUpdate(req.params.id, req.body)
   .then(()=>res.redirect("/movies"))
   .catch(next)
}); 

module.exports = router;
