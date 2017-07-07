const express = require('express');
const Celebrity = require('../models/celebrity');
// require the Drone model here



const router = express.Router();


router.get('/celebrities', (req, res, next) => {
  // Iteration #2
    Drone.find({}, (err, c) => {
      if(err){
  return next;
}
      else{
console.log(c);
        res.render('celebrities/index', {
        celebrities: c

      });
    }
    });
});
