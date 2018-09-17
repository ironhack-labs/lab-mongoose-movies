const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity.js');

router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render('celebrities/index', {celebrities});
    })
    .catch(error => {
      console.log(error)
    })
});

router.get('/:id', (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findOne({'_id': celebrityId})
    .then(celebrity => {
      res.render("celebrities/show", { celebrity })
    })
    .catch(error => {
      console.log(error)
    })
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/new', (req, res, next) => {
  const { name, occupation, catchphrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchphrase })
  newCelebrity.save()
  .then((celebrity) => {
    res.redirect('/celebrities')
  })
  .catch((error) => {
    console.log(error)
  })
});

router.get('/:id/delete',(req,res,next)=>{
  const {id} = req.params
  res.render('/celebrities')
})

router.post('/:id/delete', (req,res,next)=>{
  const {id} = req.params
  Celebrity.findByIdAndRemove(id)
    .then(celebrity=>{
      res.redirect('/celebrities')
    }).catch(e=>next(e))
})

router.get('/:id/edit',(req,res,next)=>{
  let celebrityId = req.params.id;
  Celebrity.findOne({'_id': celebrityId})
  .then(celebrity => {
    res.render("celebrities/edit", { celebrity })
  })
  .catch(error => {
    console.log(error)
  })
})

router.post('/:id/edit', (req, res, next) => {
  const { name, occupation, catchphrase } = req.body;
  Celebrity.update({_id: req.query.celebrity_id}, { $set: {name, occupation, catchphrase }})
  .then((book) => {
    res.redirect('/celebrities')
  })
  .catch((error) => {
    console.log(error)
  })
});

module.exports = router;