const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');


router.get('/', (req, res, next) => {
    Celebrity.find()
    .then((celebritiesList)=>{
        res.render('celebrities/index', {celebrities: celebritiesList})
    })
    .catch((err)=>{
        next(err);
    })
});


router.get('/new', (req, res, next) => {
  res.render('celebrities/new'); 
});

router.post("/", (req, res, next) => {
  Celebrity.create(req.body)
  .then(()=>{
    res.redirect("/celebrity")
  })
  .catch(()=>{
    res.redirect('/celebrity/new');
  })
})

router.post("/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
  .then(()=>{
    res.redirect("/celebrity")
  })
  .catch((err)=>{
    next(err)
  })
});

router.get('/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then((celebrity)=>{
      res.render('celebrities/edit', {celebrity});
  })
  .catch((err)=>{
      next(err);
  })
});

router.post("/:id", (req, res, next)=>{
  Celebrity.findByIdAndUpdate(req.params.id, req.body)
  .then(()=>{
    res.redirect("/celebrity");
  })
  .catch((err)=>{
    next(err);
  })
})

router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then((celebrity)=>{
      res.render('celebrities/show', {celebrity})
  })
  .catch((err)=>{
      next(err);
  })
});
module.exports = router;