const express = require('express');

const Celebrity = require('../models/Celebrity.model');

const router = express.Router();

router.get('/', (req, res) => {
    Celebrity.find()
      .then(allCelebritiesFromDB => {
        console.log(allCelebritiesFromDB);
        res.render('celebrities/index', { celebrities: allCelebritiesFromDB });
      })
      .catch(err =>
        console.log(`Err while getting the celebrities from the  DB: ${err}`)
      );
  });

router.get('/new', (req, res) => res.render('celebrities/celebrity-new.hbs'));


router.post('/new', (req, res) => {
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({ name, occupation, catchPhrase })
    .then(() => res.redirect('/celebrities'))
    .catch(error => `Error while creating a new celebrity: ${error}`);
});

router.post('/:id/delete', (req, res) => {
  const { id } = req.params;

  Celebrity.findByIdAndDelete(id)
    .then(() => res.redirect('/celebrities'))
    .catch(error => console.log(`Error while deleting a celebrity: ${error}`));
});


router.get('/:id', (req, res) => {
  const { id } = req.params;

  Celebrity.findById(id)
    .then(celebrity => res.render('celebrities/celebrity-info', { celebrity }))
    .catch(error => console.log('Error while retrieving celebrity details: ', error));
});


router.get('/:id/edit', (req, res) => {
  const { id } = req.params;
  Celebrity.findById(id)
    .then(celebrityToEdit => {
      res.render('celebrities/celebrity-edit', celebrityToEdit);
    })
    .catch(error =>
      console.log(`Error while getting a single celebrity for edit: ${error}`)
    );
});

router.post('/:id/edit', (req, res) => {
  const { id } = req.params;
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.findByIdAndUpdate(
    id,
    { name, occupation, catchPhrase },
    { new: true }
  )
    .then(updatedCelebrity => res.redirect(`/celebrities/${updatedCelebrity._id}`))
    .catch(error =>
      console.log(`Error while updating a single celebrity: ${error}`)
    );
});

module.exports = router;
