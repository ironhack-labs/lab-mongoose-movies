const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities/index', (req, res) => {
  Celebrity.find()
    .then((celebrities) => {
      res.render('celebrities/index', { celebrities });
    })
    .catch(err => console.log('Error:', err));
});

router.get('/celebrities/new', (req, res) => {
  res.render('celebrities/new');
});

router.post('/celebrities/new', (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  console.log(req.body);
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
  newCelebrity.save()
    .then((celebrity) => {
      res.redirect('/celebrities/index');
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get('/celebrities/:id', (req, res) => {
  const celebrityId = req.params.id;
  Celebrity.findById(celebrityId)
    .then((celebrity) => {
      console.log('Details:', celebrity);
      res.render('celebrities/show', { celebrity });
    })
    .catch(err => console.log("ERROR:", err));
});

module.exports = router;
