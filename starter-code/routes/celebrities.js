const express = require('express');
const router = express.Router();

const Celebrity = require('./../models/Celebrity');

//GET all celebrities
router.get('/', (req,res,next) => {
  Celebrity.find()
    .then( (allCelebritiesFromDb) => res.render('celebrities',{allCelebritiesFromDb}))
    .catch( (err) => console.error(err));
})

module.exports = router;