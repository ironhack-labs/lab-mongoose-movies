
//Calls expressJS
const express = require('express');

//Express router function.
const apiRouting = express.Router();

//Calls the Celebrity Model in Models
const Celebrity = require('../models/celebritymodelfile')


apiRouting.get('/api/celebrities', (req, res, next)=>{
  Celebrity.find()
  .then((allTheCelebrities)=>{
    res.json(allTheCelebrities);
  })
  .catch((err)=>{
    next(err);
  })
})







module.exports = apiRouting;
