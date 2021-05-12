const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/Celebrity.model");

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then((dbCelebrity) => {
      res.render('celebrities/index', {celebrities: dbCelebrity });
    })
    .catch((err) => next(err));
});

router.get('/celebrities/new', (req, res, next) => res.render('celebrities/new'));

router.post('/celebrities/new', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCeleb = new Celebrity({ name, occupation, catchPhrase });
  newCeleb.save()
    .then(() => res.redirect('/celebrities'))
    .catch(e => {
        next(e);
        res.redirect('/celebrities/new');
    });
});

router.get('/celebrities/:id', (req, res, next) => {
    const {id} = req.params;
    Celebrity.findById(id)
    .then(foundCeleb => {
      console.log(foundCeleb);
      res.render('celebrities/show', { celeb: foundCeleb });
    })
    .catch(e => next(e));
});

router.get('/celebrities/:id/edit', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
    .then(celebrityToEdit => {
      console.log(celebrityToEdit);
      res.render('celebrities/edit', { celebrity: celebrityToEdit });
    })
    .catch(e => next(e));
});

router.post('/celebrities/:id/edit', (req, res, next) => {
  const { id } = req.params;
  const { name, occupation, catchPhrase } = req.body;
 
  Celebrity.findByIdAndUpdate(id, { name, occupation, catchPhrase }, { new: true, runValidators: true})
  //i think it's nicer to redirect to the specific celeb so you ca see changes, so i did that
    .then(() => res.redirect(`/celebrities/${id}`))
    .catch(e => next(e));
});

router.post('/celebrities/:id/delete', (req, res, next) => {
  const { id } = req.params;

  Celebrity.findByIdAndDelete(id)
    .then(() => res.redirect('/celebrities'))
    .catch(e => next(e));
});

module.exports = router;