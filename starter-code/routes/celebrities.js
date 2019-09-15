const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity')

router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(celeb => res.render('celebrities/index', {celeb}))
    .catch(err => console.log('Celeb can not be found', err))
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.get('/:id', (req, res, next) => {
  const celebId = req.params.id;
  Celebrity.findById(celebId)
    .then(celeb => res.render('celebrities/show', {celeb}))
    .catch(err => console.log('Invalid ID', err))
});

router.get('/edit/:id', (req, res, next) => {
  const celebId = req.params.id;
  Celebrity.findById(celebId)
    .then(celeb => res.render('celebrities/edit', { celeb }))
    .catch(err => console.log('Couldnt edit', err))
});

router.post("/", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({
    name,
    occupation,
    catchPhrase
  })
    .then(() => {
      console.log(`Success! ${name} was created in the database!`);
      res.redirect(`/celebrities`);
    })
    .catch(err => {
      console.log('Invalid celebrity', err);
      res.redirect("/new");
    });
});

router.post("/delete/:id", (req, res, next) => {
  const celebId = req.params.id;
  Celebrity.findByIdAndRemove(celebId)
    .then(() => {
      console.log('Removed celeb');
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.log("Couldn't delete this celeb, sorry" ,err);
      next();
    });
});

router.get('/edit/:id', (req, res, next) => {
  const celebId = req.params.id;
  Celebrity.findById(celebId)
  .then(celeb => res.render('celebrities/edit', {celeb}))
  .catch(err => console.log('Couldnt edit:', err))
})

router.post('/edit/:id', (req, res, next) => {
  const celebId = req.params.id;
  const {name, occupation, catchPhrase} = req.body
  Celebrity.findByIdAndUpdate(celebId, {$set: {name, occupation, catchPhrase}}, {new: true})
    .then(() => res.redirect('/celebrities'))
    .catch(err => console.log('Couldnt update:', err))
})


module.exports = router;