const express = require('express');
const router = express.Router();
const Movie = require('../models/movie')

router.get("/axi", (req, res, next) =>{

  res.render("axi/index")
  // console.log("its working")
})

router.get('/axi/movies', (req, res, next)=>{
  res.render("axi/movies")
})

router.get('/api/movies', (req, res, next)=>{
  Movie.find()
  .then((data)=>{
    res.json(data)
  })
  .catch((err)=>{
    res.json(err)
  })

})


module.exports = router
