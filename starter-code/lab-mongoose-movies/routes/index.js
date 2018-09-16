const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render('celebrities/index', {celebrities});
    })
    .catch(error => {
      console.log(error)
    })
});

router.get('/celebrity/:id', (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findOne({'_id': celebrityId})
    .then(celebrity => {
      res.render("celebrities/show", { celebrity })
    })
    .catch(error => {
      console.log(error)
    })
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/celebrities/new', (req, res, next) => {
  const { name, occupation, catchphrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchphrase })
  newCelebrity.save()
  .then((celebrity) => {
    res.redirect('/celebrities')
  })
  .catch((error) => {
    console.log(error)
  })
});

module.exports = router;
