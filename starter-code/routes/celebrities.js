const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity.js');

const genericCelebrity = new Celebrity();

router.get('/', (req, res, next) => {
  Celebrity.find({})
    .then(celebrities => {
      res.render("celebrities/index", { celebrities });
    })
    .catch(error => {
      console.log(error)
    })
});


router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});


router.post('/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch(error => {
      console.log(error)
    })
});

// router.get('/:id/edit',(req,res,next)=>{
//   res.render('celebrities/edit', celebrity);
// })

router.get('/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render('celebrities/edit', celebrity);
    })
    .catch(error => {
      console.log(error)
    })
})

router.post('/:id', (req, res, next) => {
  let newCelebrity = {};
  newCelebrity.name = req.body.name;
  newCelebrity.occupation = req.body.occupation;
  newCelebrity.catchPhrase = req.body.catchPhrase;
  Celebrity.findByIdAndUpdate(req.params.id, newCelebrity)
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch(error => {
      console.log(error)
    })
})

router.get('/:id', (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findById(celebrityId)
    .then(celebrity => {
      res.render("celebrities/show", celebrity);
    })
    .catch(error => {
      console.log(error)
    })
});


router.post('/', (req, res, next) => {
  genericCelebrity.name = req.body.name;
  genericCelebrity.occupation = req.body.occupation;
  genericCelebrity.catchPhrase = req.body.catchPhrase;
  genericCelebrity.save()
    .then(() => {
      res.redirect('/');
    })
    .catch(() => {
      res.redirect('/new');
    })
});




module.exports = router;