// --- Dependencies
const express = require('express');
const router = express.Router();

const User = require('../../models/user');

router.get('/:id', (req, res, next) => {
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
