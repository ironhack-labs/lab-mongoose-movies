var express = require('express');
var router = express.Router();

const Celebrity = require('../models/celebrity')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find({},  (error, celebrities) => {
    if (error) return next(error)
    else {
      res.render('celebrities/index', { celebrities })
    }
  })
})

router.get('/celebrities/:id', (req, res, next) => {
  let id = req.params.id
  Celebrity.findOne({_id: id}, (error, celebrity) => {
    if (error) return next(error)
    else res.render('celebrities/show', { celebrity })
  })
})

router.post('/celebrities/:id/delete', (req, res, next) => {
  let id = req.params.id

  Celebrity.findByIdAndRemove({_id: id}, (error) => {
    if (error) return next(error)
    else res.redirect('/celebrities')
  })
})

// ===========================
//      Editing Celebrities
// ===========================
router.get('/celebrities/:id/edit', (req, res, next) => {
  let id = req.params.id
  Celebrity.findOne({_id: id}, (error, celebrity) => {
    if (error) return next(error)
    else res.render('celebrities/edit', { celebrity })
  })
})

router.post('/celebrities/:id', (req, res, next) => {
  let id = req.params.id
  let newDetails = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }
  Celebrity.update({_id: id}, newDetails, (error) => {
    if (error) return next(error)
    else res.redirect('/celebrities')
  })
})


router.get('/new', (req, res, next) => {
  res.render('new')
})

router.post('/celebrities', (req, res, next) => {
  let newCelebrity =  new Celebrity ({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
  newCelebrity.save( (error, newCelebrity) => {
    if (error) return next(error)
    else res.redirect('/celebrities')
  })
})

module.exports = router;
