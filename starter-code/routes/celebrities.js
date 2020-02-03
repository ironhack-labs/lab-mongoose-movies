const express = require('express');
const router  =  new express.Router();
const celebrityModel = require("../models/CelebrityModel")



router.get('/', (req, res, next) => {
  celebrityModel
  .find()
  .then(celebrities => {
    res.render("celebrities/index", {
      celebrities
    });
  })
  .catch(dbErr => {
    next(dbErr);
  })
})


router.get('/new', (req,res) => {
  res.render("celebrities/new");
})

router.post('/new', (req, res) => {
  const {name, occupation, catchPhrase} = req.body;
  celebrityModel
    .create({
      name,
      occupation,
      catchPhrase
  })
    .then(dbSuccess => {
      res.redirect('/celebrities')
    })
    .catch(dbErr => {
      res.render('/new')
    })
})

router.get('/:id', (req, res, next) => {
  celebrityModel
    .findById(req.params.id)
    .then(celeb => {
      res.render("celebrities/show", {celeb})
    })
    .catch(error => next(error))
})


router.post('/:id/delete', (req, res, next) => {
  celebrityModel
    .findByIdAndDelete(req.params.id)
    .then(success => {
      res.redirect('/celebrities')
    })
    .catch(err => next(err))
})


router.get('/:id/edit', (req, res, next) => {
  celebrityModel
  .findById(req.params.id)
  .then(dbSuccess => {
    res.render('celebrities/edit', {celeb: dbSuccess})
  })
  .catch(dbErr => next(dbErr))
})


router.post('/:id/edit', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  celebrityModel
  .findByIdAndUpdate(req.params.id, {
    name,
    occupation,
    catchPhrase
  })
  .then(dbSuccess => {
    res.redirect('/celebrities')
  })
  .catch(dbErr => next(dbErr))
})

module.exports = router;