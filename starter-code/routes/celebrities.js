const express = require('express');
const router = express.Router();
const celebrityController = require('../controllers/celebrity.controller');

router.get('/', (req, res, next) => {
  return celebrityController.getCelebrities()
    .then(val => res.render('celebrities/index', {celebrities: val}))
    .catch((err) => {
        console.error(err);
        next();
      });
  
});

module.exports = router;