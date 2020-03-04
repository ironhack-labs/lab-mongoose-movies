const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie');

router.get('/', (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render('movies/index', { movies });
    })
    .catch(next);
});

// router.get('/new', (req, res, next) => {
// 	res.render('celebrities/new');
// });

router.get('/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render('movies/show', { movie });
    })
    .catch(next);
});

// router.post('/', (req, res, next) => {
// 	const { name, occupation, catchPhrase } = req.body;
// 	Celebrity.create({
// 		name,
// 		occupation,
// 		catchPhrase,
// 	})
// 		.then(() => {
// 			res.redirect('/celebrities');
// 		})
// 		.catch(next);
// });

// router.post('/:id/delete', (req, res, next) => {
// 	const { id } = req.params;

// 	Celebrity.findByIdAndDelete(id)
// 		.then(() => {
// 			res.redirect('/celebrities');
// 		})
// 		.catch(next);
// });

// router.get('/:id/edit', (req, res, next) => {
//   Celebrity.findById(req.params.id)
//     .then(celebrity => {
//       res.render('celebrities/edit', { celebrity });
//     })
//     .catch(next);
// });

// router.post('/:id', (req, res, next) => {
//   const { name, occupation, catchPhrase } = req.body;
//   const { id } = req.params;

// 	Celebrity.update({ _id : id }, { $set: { name, occupation, catchPhrase }})
// 		.then(() => {
// 			res.redirect('/celebrities');
// 		})
// 		.catch(next);
// });



module.exports = router;
