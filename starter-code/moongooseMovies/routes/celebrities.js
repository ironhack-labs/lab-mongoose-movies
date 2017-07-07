const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/Celebrity');


router.get('/', (req, res, next) => {

  Celebrity.find({}, (err, celebrities) => {
    if (err){
      return next(err);
    }
    res.render('celebrities/index', {
      title: 'CELEBRITIES',
      celebrities: celebrities
    });
  });
});

 
router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id, (err, celebrity) => {

    if(err){
      next(err);
    }

    res.render('celebrities/show', {
      title: 'SHOW',
      celeb: celebrity
    });
  });
});

module.exports = router;


/*




const express = require('express');
const Celeb = require('../models/celebrity')
const router = express.Router();

router.get('/', (req, res) => {
  Celeb.find({}, (err, c) => {
    if (err){
      return next();
    }
    res.render('celebrities/index', {
      celebs: c,
    });
  });
});

router.get('/:id', (req, res, next) => {
  Celeb.findById(req.params.id, (err, c) => {
    if(err){
      return next();
    }
    res.render('celebrities/show', {
      c: c
    });
  });
});

/*
router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id, (err, celebrity) => {

    if(err){
      next(err);
    }

    res.render('celebrities/show', {
      title: 'SHOW',
      celebrity: celebrity
    })
  })
})*/
