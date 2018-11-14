const express = require('express');
const router  = express.Router();
const Celebrity    = require('../models/Celebrity');

router.get('/', (req, res, next) => {
  Celebrity.find()
  .then((allTheCelebs)=>{
      res.render('celebrities/celebrities', {celebs: allTheCelebs})
  })
  .catch((err)=>{
      next(err);
  })
});

router.get('/new', (req, res, next) => {
  Celebrity.find()
  .then((allTheCelebs)=>{
      res.render('celebrities/new-celebrity', {allTheCelebs})
  })
  .catch((err)=>{
      next(err);
  })
});

router.post('/create', (req, res, next)=>{
      Celebrity.create(req.body)
      .then(()=>{
          res.redirect('/celebrities');
      })
      .catch((err)=>{
          next(err)
      })
})

router.get('/:theIdThing/edit', (req, res, next)=>{
    Celebrity.findById(req.params.theIdThing)
    .then((theCelebrity)=>{
        res.render('celebrities/edit', {theCelebrity: theCelebrity})    
    })
    .catch((err)=>{
        next(err);
    })
});


router.get('/:theID', (req, res, next)=>{
  Celebrity.findById(req.params.theID)
  .then((theCelebrity)=>{
      res.render('celebrities/details', theCelebrity)
  })
  .catch((err)=>{
      next(err);
  })
});

router.post('/:id/update', (req, res, next)=>{
  Celebrity.findByIdAndUpdate(req.params.id, req.body)
  .then(()=>{
      res.redirect('/celebrities/'+req.params.id);
  })
  .catch((err)=>{
      next(err)
  })
})

router.post('/:id/delete', (req, res, next)=>{
  Celebrity.findByIdAndRemove(req.params.id)
  .then(()=>{
      res.redirect('/celebrities')
  })
  .catch((err)=>{
      next(err);
  })
});




module.exports = router;