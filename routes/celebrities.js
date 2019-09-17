const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity.js')
const Movie = require('../models/Movie')

router.get('/', (req, res, next) => {

  Celebrity.find().then(data => {
    res.render('celebrities/index', {celebs: data})
  }).catch(err => next(err))
})



router.get('/single/:id', (req, res, next) => {
  let id = req.params.id
  Celebrity.findById(id).populate("movies").then(data => {
    console.log(data)
    res.render('celebrities/show', {celeb: data})
  }).catch(err => next(err))

})


router.get('/new', (req,res, next) => {
  res.render("celebrities/new")
})

router.post('/create', (req, res, next) => {
    Celebrity.create(
      {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase,
        image: req.body.image
      }
    ).then(data => {
      res.redirect(`/celebrities/single/${data._id}`)
    })
})

router.post('/delete/:id', (req, res, next) => {
  let id = req.params.id

  Celebrity.findByIdAndDelete(id).then(data =>{

    Movie.updateMany({ actors: { $in: id } }, 
      
        { $pull: {actors: id} }
      ).then(data => {
        res.redirect(`/celebrities`)
      })

    }).catch(err => next(err))
  })

router.get('/edit/:id', (req, res, next) => {
  let id = req.params.id
  Celebrity.findById(id).then(celeb => {
    res.render("celebrities/edit", {celeb: celeb})
  }).catch(err => next(err))
})


router.post('/update/:id', (req,res,next) => {
  let id = req.params.id
  let name = req.body.name
  let occupation = req.body.occupation
  let catchPhrase = req.body.catchPhrase
  let image = req.body.image

  Celebrity.findByIdAndUpdate(id, {
    name: name, 
    occupation: occupation, 
    catchPhrase: catchPhrase,
    image: image
  }).then((data) =>{
    res.redirect("/celebrities")
  }).catch(err => next(err))
})



module.exports = router;