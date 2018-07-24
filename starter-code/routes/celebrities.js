var express = require('express');
var router = express.Router();
const Celebrities = require('../models/celebrity')


/* GET celebrities listing. */
router.get('/', function (req, res, next) {
  Celebrities.find({})
    .then(celebrities => {
      //console.log(celebrities)
      res.render('celebrities/index', {
        celebrities
      });
    })
    .catch(error => {
      next(error)
    })
});

// Create New celebrity
router.get('/new', function (req, res, next) {
  res.render('celebrities/new', {msg: 'Create new celebrity'})
})

// save new celebrity
router.post('/', function (req, res, next) {
  console.log(JSON.stringify(req.body))
  console.log(JSON.stringify(req.query))
  console.log(req.query)
  let celeb = {
    name: `${req.body.name}`,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }
  console.log(celeb)
  newCeleb = new Celebrities(celeb)
  newCeleb.save ()
    .then(celeb => {
      console.log(`${celeb.name} inserted in database`)
      res.redirect('/celebrities')
    })
    .catch(error => {
      res.redirect('/celebrities/new')
    })
})

//MODIFY
router.get('/:id/edit', function (req, res, next) {
  id = req.params.id
  //console.log(id)
  Celebrities.findById(id)
    .then(celebrity => {
      //console.log(celebrities)
      res.render('celebrities/edit', celebrity );
    })
    .catch(error => {
      next(error)
    })
});

//delete celebrity
router.post('/:id/delete', function (req, res, next) {
  id = req.params.id
  //console.log(id)
  Celebrities.findByIdAndRemove(id)
    .then(celebrity => {
      //console.log(celebrity)
      res.redirect('/celebrities');
    })
    .catch(error => {
      next(error)
    })
})

//UPDATE
router.post('/:id', function (req, res, next) {
  id = req.params.id
  let celeb = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }
  
  Celebrities.findByIdAndUpdate(id,celeb)
    .then(celebrity => {
      console.log(celebrity)
      res.redirect(`/celebrities`);
    })
    .catch(error => {
      next(error)
    })
})

// All :id in last position for control of variable url
/* GET details of one celebrity . */
router.get('/:id', function (req, res, next) {
  id = req.params.id
  Celebrities.findById(id)
    .then(celebrity => {
      console.log(celebrity)
      res.render('celebrities/show', celebrity);
    })
    .catch(error => {
      next(error)
    })
});

module.exports = router;