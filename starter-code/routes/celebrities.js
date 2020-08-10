const express = require('express');
const router = express.Router();

const Celebrity = require('../models/Celebrity.model');


// Iteration 2: Get all Celebs
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebsFromDB => {
      console.log(`List of celebrities: ${celebsFromDB}`)
      res.render('./celebrities/index', { celebs : celebsFromDB })
    })
    .catch((err) => {
      console.log(`Error while getting celebrities from the DB: ${err}`);
      next();
    });
});


// Iteration 3: Show Celeb Details
router.get('/celebrities/:id', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
    .then(celeb => {
      console.log(`Details of football celeb: ${celeb}`)
      res.render('./celebrities/show', celeb)
    })
    .catch((err) => {
      console.log(`Error while getting celebrities from the DB: ${err}`);
      next();
    });
});


// Iteration 4: Create a new Celeb
router.get('/celebrities/new', (req, res) => res.render('./celebrities/new'));

router.post('/celebrities/new', (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.findOne({ name })
    .then(celebDocFromDB => {
      if (!celebDocFromDB) {
        Celebrity.create({ name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'));
      } else {
        res.render('./celebrities/new', { message: 'Celebrity already exist.' });
        return;
      }
    })
    .catch((err) => {
      console.log(`Error while creating a new celebrity: ${err}`);
      next();
    });
});


// Iteration 5: Delete a Celeb
router.post('/celebrities/:id/delete', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findByIdAndDelete(id)
    .then(() => res.redirect('/celebrities'))
    .catch((err) => {
      console.log(`Error while deleting a celebrity: ${err}`);
      next();
    });
});


// Iteration 6: Edit a Celeb
router.get('/celebrities/:id/edit', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
    .then(celebToEdit => {
      res.render('./celebrities/edit', celebToEdit);
    })
    .catch((err) => {
      console.log(`Error while editing a celebrity: ${err}`);
      next();
    });
});

router.post('/celebrities/:id/edit', (req, res, next) => {
  const { id } = req.params;
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.findByIdAndUpdate(
    id,
    { name, occupation, catchPhrase },
    { new: true }
  )
  .then(() => res.redirect('/celebrities'))
  .catch((err) => {
    console.log(`Error while editing a celebrity: ${err}`);
    next();
  });
});



module.exports = router;