const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity')


router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(celebs => {
      res.render('celebrities/index', { celebs })

    })
})
/* router.get('/movie/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render('movie', movie)
    })
})
 */
module.exports = router;