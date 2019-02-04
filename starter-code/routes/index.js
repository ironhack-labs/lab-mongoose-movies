const express = require('express');
const router = express.Router();
const celebrity = require('../models/celebrity.js');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  celebrity.find()
    .then(cbty => {
      res.render('celebrities/index', { cbty });
    })
    .catch(error => {
      console.log(error)
    })
});

router.get('/celebrities/:id', (req, res, next) => {
  celebrity.findById(req.params.id)
    .then(cbty => {
      res.render('celebrities/show', { cbty });
    })
    .catch(error => {
      next();
      console.log(error)
    });
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new')

});

router.post('/celebrities', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  console.log(req.body);
  const newCelebrity = new celebrity({ name, occupation, catchPhrase })
  newCelebrity.save()
    .then((cbty) => {
      res.redirect('/celebrities', { cbty });
    })
    .catch((error) => {
      
      console.log(error);
      res.render('celebrities/new');
    })

});



module.exports = router;

