const express = require('express');
const router = express.Router();
const Celebrities = require('../models/Celebrity');

router.get('/', (req, res, next)=>{
  Celebrities.find()
  .then((celebs)=>{
    res.render('celebrities', {Celebrities: celebs})
  })
  .catch((err)=>{
    next(err)
  })
})

router.get('/new', (req, res, next)=>{
  res.render('celebrities/new');
})

router.get('/:ID', (req, res, next)=>{
  Celebrities.findById(req.params.ID)
  .then((celeb)=>{
    res.render('celebrities/show', {Celebrity: celeb});
  })
  .catch((err)=>{
    next(err);
  })
})

router.post('/', (req, res, next)=>{
  const newCelebrity = new Celebrities(req.body);
  newCelebrity.save()
  .then(()=>{
    res.redirect('/celebrities');
  })
  .catch((err)=>{
    res.redirect('/celebrities/new');
    next(err);
  })
})


router.get('/:id/delete', (req, res, next)=>{
  Celebrities.findByIdAndRemove(req.params.id)
  .then(()=>{
    res.redirect('/celebrities')
  })
  .catch((err)=>{
    next(err);
  })
})

router.get('/:id/edit', (req, res, next)=>{
  Celebrities.findById(req.params.id)
  .then((celeb)=>{
    res.render('celebrities/edit', celeb);
  })
  .catch((err)=>{
    next(err);
  })
})

router.post('/:id', (req, res, next)=>{
  Celebrities.findByIdAndUpdate(req.params.id, req.body)
  .then(()=>{
    res.redirect('/celebrities/'+req.params.id);
  })
  .catch((err)=>{
    next(err)
  })
})


module.exports = router;