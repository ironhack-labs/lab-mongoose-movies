const express = require('express');
const router  = express.Router();
const Movie = require ('../models/Movie')

router.get('/', (req, res, next) => {
  Movie.find()
  .then(movies =>{
    res.render('movies',{movies})
  })
  .catch(e=>next(e))
})

// Detail

router.get("/show-movies/:id",(req,res,next)=>{
    const {id} = req.params
    Movie.findById(id)
    .then(movies=>{
    res.render("show-movies",movies)
    }).catch(e=>next(e))
   })

// New

router.get('/new',(req,res,next)=>{
    res.render("new-movie-form")
  })
  
  router.post ('/new',(req,res,next)=>{
    Movie.create(req.body)
    .then(movies =>{
      res.redirect('/movies')
    })
  })


// Delete 

router.get('/:id/delete',(req,res,next)=>{
    const {id} = req.params
    res.render('movies/')
  })
   router.post('/:id/delete', (req,res,next)=>{
    const {id} = req.params
    Movie.findByIdAndRemove(id)
      .then(movies=>{
        res.redirect('/movies')
      }).catch(e=>next(e))
  })


  // Edit

router.get ('/edit/:id',(req,res,next)=>{
    const {id} = req.params
    Movie.findById(id)
    .then (movies =>{
      res.render('edit-movie-form',movies)
    }) .catch(e=>next(e))
  })
  
  router.post('/edit/:id',(req,res,next)=>{
    const {id} = req.params
    Movie.findByIdAndUpdate(id,{$set:req.body},{new:true})
    .then (movies =>{
      res.redirect(`/movies/show-movies/${id}`)
    }) .catch(e=>next(e))
  })


 
module.exports = router;
