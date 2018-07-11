// --- Dependencies
const express = require('express');
const router = express.Router();
// const app = require('../../app');

const User = require('../../models/user');
const requireLoggedInUser = require('../../middlewares/require-loggedin-user');
const isIdValid = require('../../middlewares/is-id-valid');

router.get('/:id', requireLoggedInUser, isIdValid, (req, res, next) => {
  // Get id from param
  const celebId = req.params.id;
  const userId = req.session.currentUser._id;
  // Add it to favourites
  User.findByIdAndUpdate(userId, { $addToSet: { stars: celebId } }, { new: true })
    .then(result => {
      app.use((req, res, next) => {
        // app.locals.currentUser = result;
        next();
      });
      res.redirect('/celebrities');
    })
    .catch(next);
});

module.exports = router;
