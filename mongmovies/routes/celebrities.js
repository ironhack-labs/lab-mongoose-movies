const express   = require('express');
const Celebrity = require('../models/celebrity');

const router    = express.Router();

router.get('/', (req, res, next)=> {
  Celebrity.find({}, (err, celebrity)=>{
    console.log(celebrity);
    if (err){
      next(err);
    } else {
      res.render('celebrities/index', {celebrity: celebrity} );
    }
  });
});

router.get('/new', (req, res, next)=> {
  res.render('celebrities/new');
});

router.post('/', (req, res, next)=>{
  const newCelebInfo = {
    name : req.body.name,
    occupation : req.body.occupation,
    catchPhrase : req.body.catchPhrase
  };
  let newCeleb = new Celebrity(newCelebInfo);

  newCeleb.save( (err)=>{
    if (err){
      alert("Try again");
      res.render('celebrities/new');
    } else {
      res.redirect('/celebrities');
    }
  });
});


// **route for celebrities is already set in app.js so this get route only requires the next path stage i.e /:id //**
router.get('/:id', (req, res, next)=> {
  const celebId = req.params.id;
//                             **celebrity** is a reminder for me, the name does not have to relate to anything//
  Celebrity.findById(celebId, (err, celebrity)=>{
    console.log(celebId);
    if (err){
      next(err);
    } else {
      console.log(celebrity);
      res.render('celebrities/show', {celebrity: celebrity} );
    }
  });
});

router.post('/:id/delete', (req, res, next)=> {
  const celebId = req.params.id;
  Celebrity.findByIdAndRemove(celebId, (err, celeb)=> {
    if(err)
    {
      next(err);
    } else {
    res.redirect('/celebrities');
    }
  });
});

router.get('/:id/edit', (req, res, next)=> {
  const celebId = req.params.id;
  Celebrity.findById(celebId, (err, celeb)=> {
    if (err){
      next(err);
    }
    res.render('celebrities/edit', {celeb: celeb});
  });
});

router.post('/:id', (req, res, next)=> {
  const celebId = req.params.id;
  let newInfo = {
    name       : req.body.name,
    occupation : req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };

  Celebrity.findByIdAndUpdate(celebId, newInfo, (err, celeb)=> {
    if (err){ next(err);
    } else {
    res.redirect('/celebrities');
    }
  });
});

module.exports = router;
