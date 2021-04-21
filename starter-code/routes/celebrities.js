const express = require('express');
const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');

const router = express.Router();

router.get('/celebrities', (req, res, next) => {
  Celebrity
    .find({})
    .then((resultsFromDB) => {
      res.status(200).render('celebrities/list', { celebrities: resultsFromDB })
    })
    .catch((err) => {
      console.error(`Error occured while listing celebrities: ${err}`);

      next(err);
    })
});

router.get('/celebrities/new', (req, res) => {
  res.status(200).render('celebrities/new')
});

router.get('/celebrities/:_id', (req, res, next) => {

  Celebrity
    .findById(req.params._id)
    .then((celebrityDetails) => {
      res.status(200).render('celebrities/show', celebrityDetails)
    })
    .catch((err) => {
      console.error(`Error occured while listing celebrities details: ${err}`);

      next(err);
    })
});

router.post('/celebrities/new', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  Celebrity
    .create({ name, occupation, catchPhrase })
    .then((resultsFromDB) => {
      res.status(200).redirect("/celebrities")
    })
    .catch((err) => {
      console.error(`Error occured while adding celebrity ${err}`);
      res.redirect("celebrities/new")

      next(err)
    })
});

router.post('/celebrities/:id/delete', (req, res, next) => {
  const { id } = req.params;
  Celebrity
   .findByIdAndDelete(id)
    .then(() => {
     
     res.status(200).redirect('/celebrities')
    })
    .catch((err) => {
      console.error(`Error occured while deleting the celebrity: ${err}`);
      res.redirect(`/celebrities/${req.params._id}/delete`);

      next(err);
    })
});

router.get('/celebrities/:id/edit', (req, res, next) => {
  const { id } = req.params;
  
  Celebrity
    .findById(id)
    .then((result) => {
      res.status(200).render('celebrities/edit', result)
    })
    .catch((error) => {
      res.redirect(`/celebrities/${req.params._id}/edit`)
    })
});

router.post('/celebrities/:id/edit', (req, res, next) => {
  const { id } = req.params;
  const { name, occupation, catchPhrase } = req.body;

  Celebrity
    .findByIdAndUpdate(id, { name: name, occupation: occupation, catchPhrase: catchPhrase })
    .then(() => {
      res.status(200).redirect('/celebrities')
    })
    .catch((err) => {
      console.error(`Error occured while editing the celebrity: ${err}`);
      res.redirect(`/celebrities/${req.params._id}/edit`);

      next(err);
    })
});

module.exports = router;