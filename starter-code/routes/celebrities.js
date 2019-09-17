const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');

router.get('/index', (req, res, next)=>{

  Celebrity.find()
  .then(allCelebs=>{
      res.render('celebrities/index', {celebs: allCelebs})
  })
  .catch((err)=>{
      next(err);
  })

})

router.get('/show/:id', (req, res, next)=>{
  let id = req.params.id;
  Celebrity.findById(id)
  .then(celeb =>{
      res.render('celebrities/show', {celeb: celeb})
  })
  .catch((err)=>{
      next(err);
  })

})

router.get('/new-celeb', (req, res, next)=>{
  res.render('celebrities/new');
})

router.post('/created', (req, res, next)=>{

  let name = req.body.name;
  let occupation = req.body.occupation;
  let catchPhrase = req.body.catchPhrase;


  Celebrity.create({
      name: name,
      occupation: occupation,
      catchPhrase: catchPhrase
  })
  .then((result)=>{
      res.redirect('/index')
  })
  .catch((err)=>{
      next(err);
  })
})


router.post('/delete/:id', (req, res, next)=>{
  let id = req.params.id;

  Celebrity.findByIdAndRemove(id)
  .then((result)=>{
      res.redirect('/index')
  })
  .catch((err)=>{
      next(err)
  })
})


router.get('/edit/:id', (req, res, next)=>{

  let id=req.params.id;

  Celebrity.findById(id)
  .then(celebrity=>{
      res.render('celebrities/edit', {celeb: celebrity})
  })
  .catch((err)=>{
      next(err)
  })
})


router.post('/update/:id', (req, res, next)=>{

  let id=req.params.id;

  Celebrity.findByIdAndUpdate(id, {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
  })
  .then((result)=>{
      res.redirect('/show/'+id)
  })
  .catch((err)=>{
      next(err);
  })

})


module.exports = router;