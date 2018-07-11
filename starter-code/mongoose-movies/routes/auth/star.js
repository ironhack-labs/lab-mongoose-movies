// --- Dependencies
const express = require('express');
const router = express.Router();

const User = require('../../models/user');

router.get('/:id', (req, res, next) => {
  // Get id from param
  const celebId = req.params.id;
  const userId = req.session.currentUser;
  // Add it to favourites
  User.findByIdAndUpdate(userId, { $addToSet: { stars: celebId } })
    .then(result => {
      res.redirect('/celebrities');
    })
    .catch(next);
});

module.exports = router;
