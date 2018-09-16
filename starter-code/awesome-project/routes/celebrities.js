const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity.js')

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render("./celebrities/index", { celebrities });
    })
    .catch(error => {
      console.log(error)
    })
});

router.get('/celebrities/:id', (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findOne({'_id': celebrityId})
  .then(Celebrity => {
    res.render('celebrities/show', Celebrity)
  })
  .catch(error => {
    console.log(error)
  })
})

router.get('/new', (req, res, next) => {
  res.render('celebrities/new')
})

router.post ('/new', (req, res, next) => {
  const {name, ocupation, catchPhrase} = req.body;
  const celebrity = new Celebrity ({name, ocupation, catchPhrase});
  celebrity.save( err => {
    if (err) {return next (err) }
    res.redirect('/celebrities');
  })
})

router.post('/celebrities/:id/delete', (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findOneAndRemove({'_id': celebrityId})
  .then( () => {
    res.redirect('/celebrities')
  })
  .catch(next)
    
  })


router.get('/celebrities/edit/:id', (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findOne({'_id': celebrityId})
  .then(celebrity => {
    res.render('celebrities/edit', celebrity)
  })
  .catch(error => {
    console.log(error)
  })
})

router.post('/celebrities/:id', (req, res, next) => {
  const {name, ocupation, catchPhrase} = req.body;
  Celebrity.findOneAndUpdate({'_id': req.params.id}, {$set: {name, ocupation, catchPhrase}})
  .then( () => {
    res.redirect('/celebrities')
  })
  .catch(next)
})


module.exports = router;