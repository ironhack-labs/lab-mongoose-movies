const express = require('express');

// require the Celebrity model here

const router = express.Router();
const Celebrity = require("../models/celebrity")

// CRUD -> READ CELEBRITIES
router.get('/', (req, res) => {
  Celebrity.find().exec((err,celebrities) => {
    res.render("celebrities/index" , {
      celebrities:celebrities
    })
  })
});

/*
router.get('/new', (req, res) => {
  res.render("drones/new");
});

router.post('/new', (req, res, next) => {
  const {name,propellers,maxSpeed} = req.body;
  const drone = new Drone({name,propellers,maxSpeed});
  drone.save(err => {
    if(err){return next(err)}
    res.redirect("/");
  })
});
*/
module.exports = router;