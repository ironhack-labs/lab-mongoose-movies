const express = require('express')
const router = express.Router()
const Movie = require('../models/Movie')

//List Celebrities
router.get('/',(req, res, next)=>{
  Movie.find()
    .then(movies=>{
      res.render('movies/list',{movies})
    }).catch(e=>{
      next(e)
    })
})

router.get('/detail/:id',(req, res, next)=>{
  const {id} = req.params
  Movie.findById(id)
    .then(movie=>{
      res.render('movies/detail',movie)
    }).catch(e=>{
      next(e)
    })
})

module.exports = router