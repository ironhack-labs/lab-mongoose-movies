const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const Celebrity = require('../models/celebrity');
const User = require('../models/user');

/* GET home page. */
router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      const userId = req.session.currentUser;
      User.findById(userId)
        .then(user => {
          res.render('celebrities', { celebrities: celebrities, stars: user.stars });
        });
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

router.get('/add', (req, res, next) => {
  res.render('celebrities/add');
});

router.post('/add', (req, res) => {
  // Destructuring req.body into separate variables
  const { name, occupation, catchPhrase } = req.body;
  const newCeleb = new Celebrity({ name, occupation, catchPhrase });
  newCeleb.save()
    .then(celeb => {
      res.render('celebrities/details', celeb);
    })
    .catch(err => {
      console.log(err);
      res.render('celebrities/add');
    });
});

router.post('/:id/delete', (req, res, next) => {
  const celebId = req.params.id;
  Celebrity.findByIdAndRemove(celebId)
    .then((result) => {
      return res.redirect('../');
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

router.get('/:id/edit', (req, res, next) => {
  const celebId = req.params.id;
  Celebrity.findById(celebId)
    .then(celeb => {
      res.render('celebrities/edit', celeb);
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

router.post('/:id/edit', (req, res, next) => {
  const celebId = req.params.id;
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate(celebId, { name, occupation, catchPhrase }, { new: true })
    .then((result) => {
      console.log(result);
      res.render('celebrities/details', result);
    })
    .catch(err => {
      console.log(err);
      next();
    });
});
router.get('/:id', (req, res, next) => {
  const celebId = req.params.id;
  Celebrity.findById(celebId)
    .then(celeb => {
      console.log(celeb);
      res.render('celebrities/details', celeb)
        .catch(err => {
          console.log(err);
          next();
        });
    });
});

module.exports = router;
