// --- Dependencies
const express = require('express');
const router = express.Router();
const app = require('../../app');

const User = require('../../models/user');
const requireLoggedInUser = require('../../middlewares/require-loggedin-user');
const isIdValid = require('../../middlewares/is-id-valid');

router.get('/:id', requireLoggedInUser, isIdValid, (req, res, next) => {
  // Get id from param
  const celebId = req.params.id;
  const userId = req.session.currentUser;
  // Pull from favourites
  User.findByIdAndUpdate(userId, { $pull: { stars: celebId } })
    .then(result => {
      res.redirect('/celebrities');
    })
    .catch(next);
});

module.exports = router;
