const express = require('express');

const Celebrity = require('../../models/celebrity');

const router = express.Router();

/* Display the new celebrity form */
router.get('/new', (req, res) => {
  res.render('./celebrities/new');
});

/* Add a new celebrity to the database */
router.post('/', (req, res, next) => {
  const celebrityInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  };

  const newCelebrity = new Celebrity(celebrityInfo);
  newCelebrity.save((err) => {
    if (err) {
      return res.render('./celebrities/new', { errors: newCelebrity.errors });
    }
    return res.redirect('./celebrities');
  });
});

/* Show all celebrities */
router.get('/', (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
    if (err) {
      next(err);
    }
    res.render('./celebrities/', { celebrities });
  });
});

/* Show a specific celebrity */
router.get('/:celebrityId', (req, res, next) => {
  const celebrityID = req.params.celebrityId;
  Celebrity.findById(celebrityID, (err, celebrity) => {
    if (err) {
      next(err);
    }
    res.render('./celebrities/show', { celebrity });
  });
});


module.exports = router;
