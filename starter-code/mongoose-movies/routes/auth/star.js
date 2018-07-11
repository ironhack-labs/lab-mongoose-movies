// --- Dependencies
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const User = require('../../models/user');

// --- Config
const saltRounds = 10;

/* GET login page. */

router.get('/:id', (req, res, next) => {
  // Get id from param
  const celebId = req.params.id;
  const userId = req.session.currentUser;
  // Check if it exists in favourites
  User.findByIdAndUpdate(userId, { $addToSet: { stars: celebId } })
    .then(result => {
      res.redirect('/celebrities');
    })
    .catch(next);
  // Add it to favourites
});

module.exports = router;
