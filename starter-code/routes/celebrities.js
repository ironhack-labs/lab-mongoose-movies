const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity.js');

// GET list of celebrities
router.get('/celebrities', (req, res) => {
  Celebrity.find().then((allTheCelebs) => {
    res.render('../views/celebrities/index', {
      celebrities: allTheCelebs,
    });
  });
});

// GET form to edit existing celebrities
router.get('/celebrities/:celebId/edit', (req, res) => {
  const celebId = req.params.celebId;
  Celebrity.findById(celebId)
    .then((celeb) => {
      res.render('../views/celebrities/edit', {
        celebrity: celeb,
      });
    });
});

// GET add new celebrity page
router.get('/celebrities/new', (req, res) => {
  res.render('../views/celebrities/new');
});

// GET celebrity description
router.get('/celebrities/:celebId', (req, res) => {
  const celebId = req.params.celebId;
  Celebrity.findById(celebId).then((retrievedCelebrity) => {
    res.render('../views/celebrities/show', {
      celebrity: retrievedCelebrity,
    });
  });
});

// POST add new celebrity
router.post('/celebrities', (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({
    name,
    occupation,
    catchPhrase,
  });
  newCelebrity
    .save(() => {
      res.redirect('/celebrities');
    })
    .catch((err) => {
      console.log(err);
      res.redirect('/celebrities/new');
    });
});

// POST delete selected celebrity
router.post('/celebrities/:celebId/delete', (req, res) => {
  let celebId = req.params.celebId;
  Celebrity.findByIdAndRemove(celebId)
    .then(() => {
      console.log('done!');
      res.redirect('/celebrities');
    })
    .catch((err) => console.log(err));
});

// POST edit existing celebrity
router.post('/celebrities/:celebId', (req, res) => {
  const celebId = req.params.celebId;
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.update(
    {
      _id: celebId,
    },
    {
      $set: {
        name,
        occupation,
        catchPhrase,
      },
    }
  )
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((err) => console.log(err));
});

module.exports = router;
