const express = require('express');
const router = express.Router();


const Celebrity = require('../models/celebrity');
// const celebs = require('../data/celebs.json');

router.post('/celebrities/:id/delete', (req, res, next) => {
  const id = req.params.id
  Celebrity.findByIdAndDelete(id)
  .then(() => {res.redirect('/celebrities')}
  )
  .catch(err => next(err));
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new')
});

router.get('/celebrities/:id/edit', (req, res, next) => {
  const id = req.params.id
  Celebrity.findByIdAndUpdate(id)
    .then(celeb => {
      //res.send(celeb)
      res.render('celebrities/edit', {celeb})
    })
    .catch(err => next(err))
})

router.get('/celebrities/:id', (req, res, next) => {
  const id = req.params.id;
  Celebrity.findById(id)
    .then(celeb => {
      res.render('celebrities/show', {celeb})
    })
    .catch(err => next(err));
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      // console.log(celebrities);
      res.render('celebrities/index', {celebrities})
    })
    .catch(err => next(err));
});

router.post('/celebrities/:id', (req, res, next) => {
  
  //res.send(req.params)
  // const id = req.params.id
  const { name, ocupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate({ _id: req.params.id }, { $set: { name, ocupation, catchPhrase }}, {new: true})
    .then(() => {
      res.redirect('/celebrities')

    })
    .catch(err => next(err))
})

router.post('/celebrities', (req, res, next) => {
  const { name, ocupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, ocupation, catchPhrase})
  newCelebrity.save()
    .then(() => {
      res.redirect('/celebrities')
      // console.log('celebrity add to DB')
    })
    .catch( 
      res.render('celebrities/new'),
      err => next(err)
      );
});




module.exports = router

