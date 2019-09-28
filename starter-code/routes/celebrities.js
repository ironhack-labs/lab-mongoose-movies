const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');

router.get('/celeb-index', (req, res, next)=>{

  Celebrity.find()
  .then(allCelebs=>{
      res.render('celebrities/celeb-index', {celebs: allCelebs})
  })
  .catch((err)=>{
      next(err);
  })

});

router.get('/show-celeb/:id', (req, res, next)=>{
  let id = req.params.id;
  Celebrity.findById(id)
  .then(celeb =>{
      res.render('celebrities/show-celeb', {celeb: celeb})
  })
  .catch((err)=>{
      next(err);
  })

});

router.get('/new-celeb', (req, res, next)=>{
  res.render('celebrities/new-celeb');
});

router.post('/created-celeb', (req, res, next)=>{

  let name = req.body.name;
  let occupation = req.body.occupation;
  let catchPhrase = req.body.catchPhrase;
  let image = req.body.image;


  Celebrity.create({
      name: name,
      occupation: occupation,
      catchPhrase: catchPhrase,
      image: image
  })
  .then((result)=>{
      res.redirect('/celeb-index')
  })
  .catch((err)=>{
      next(err);
  })
})


router.post('/delete-celeb/:id', (req, res, next)=>{

  let id = req.params.id;

  Celebrity.findByIdAndRemove(id)
  .then((result)=>{
      res.redirect('/celeb-index')
  })
  .catch((err)=>{
      next(err)
  })
});


router.get('/edit-celeb/:id', (req, res, next)=>{

  let id=req.params.id;

  Celebrity.findById(id)
  .then(celebrity=>{
      res.render('celebrities/edit-celeb', {celeb: celebrity})
  })
  .catch((err)=>{
      next(err)
  })
})


router.post('/update-celeb/:id', (req, res, next)=>{

  let id=req.params.id;

  Celebrity.findByIdAndUpdate(id, {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase,
      image: req.body.image
  })
  .then((result)=>{
      res.redirect('/show-celeb/'+id)
  })
  .catch((err)=>{
      next(err);
  })

});


module.exports = router;