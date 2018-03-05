const express   = require('express');
const Celebrety = require('../models/celebrity')
const router    = express.Router();

router.get('/', (req, res, next) => {
  Celebrety.find({}, (err, celebrities) => {
    if (err) {
      return next(err);
    }
    res.render('celebrities/index', {
      celebrities: celebrities
    });
  });
});

router.get('/new' ,(req, res, next) => {
  res.render('celebrities/new');
});

router.post('/', (req, res, next) => {
  const celebInfo = {
    name        : req.body.name,
    occupation  : req.body.occupation,
    catchPhrase : req.body.catchPhrase
  }

  const newCeleb = new Celebrety(celebInfo);

  newCeleb.save(err => {
    if (err) {return next(err)}
    return res.redirect('/celebrities');
  }) 
})

router.get('/:id/delete', (req, res, next) => {
  let id = req.params.id;
  Celebrety.findByIdAndRemove(id, (err, data) => {
    if (err) {
      return next(err);
    }
  })
  return res.redirect('/celebrities')
})

router.get('/:id/edit', (req, res, next) => {
  let id = req.params.id;
  Celebrety.findById(id, (err, celeb) => {
    res.render('celebrities/edit', {
       celeb: celeb 
    })
  })
})

router.post('/:id', (req, res, next) => {
  let id = req.params.id;
  const celebData = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }
  Celebrety.update({_id: id}, celebData, (err, response) => {
    if (err) {
      return next(err);
    }

  });
  return res.redirect('/celebrities/' + id);
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  console.log(id);
  Celebrety.findById(id, (err, celeb) => {
    if (err) {
      return next(err);
    }
    res.render('celebrities/show', {
      celeb: celeb
    });
  });
});






module.exports = router;