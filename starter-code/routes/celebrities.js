'use strict';

const express = require('express');

// require the Drone model here

const router = express.Router();

const Celebrity = require('../models/celebrities');

router.get('/', (req, res, next) => {
  // Iteration #2

  Celebrity.find({}, (err, celebrities) => {
    if (err) {
      return next(err);
    }
    res.render('./celebrities/index', {
      celebrities: celebrities
    });
  });
  //   drones.forEach((drones) => {
  //     console.log(' --> drones: ', drones.name);
  //   });
  // });
});

router.get('/new', (req, res, next) => {
  // Iteration #3
  res.render('celebrities/new');
});

router.post('/', (req, res, next) => {
  // let name = req.body.name;
  // let propellers = req.body.propellers;
  // let maxSpeed = req.body.maxSpeed;

  // res.send(`Name: ${name}, Propellers: ${propellers}, Max Speed: ${maxSpeed}`);

  const droneInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };

  // Create a new Product with the params
  const newCelebrity = new Celebrity(celebrityInfo);

  newCelebrity.save((err) => {
    if (err) {
      return next(err);
    }
    return res.redirect('/celebrities');
  });
});

module.exports = router;
