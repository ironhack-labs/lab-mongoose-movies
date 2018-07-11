const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity');
const User = require('../models/user');

const requireLoggedInUser = require('../middlewares/require-loggedin-user');
const isIdValid = require('../middlewares/is-id-valid');

/* GET home page. */
router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render('celebrities', { celebrities: celebrities });
    })
    .catch(next);
});

router.get('/add', requireLoggedInUser, (req, res, next) => {
  res.render('celebrities/add');
});

router.post('/add', requireLoggedInUser, (req, res, next) => {
  // Destructuring req.body into separate variables
  const { name, occupation, catchPhrase } = req.body;
  const newCeleb = new Celebrity({ name, occupation, catchPhrase });
  newCeleb.save()
    .then(celeb => {
      res.render('celebrities/details', celeb);
    })
    .catch(next);
});

router.post('/:id/delete', requireLoggedInUser, isIdValid, (req, res, next) => {
  const celebId = req.params.id;
  Celebrity.findByIdAndRemove(celebId)
    .then((result) => {
      return res.redirect('../');
    })
    .catch(next);
});

router.get('/:id/edit', [requireLoggedInUser, isIdValid], (req, res, next) => {
  const celebId = req.params.id;
  // @todo if not valid id (celebId) {
  //   return next();
  // }

  Celebrity.findById(celebId)
    .then(celeb => {
      if (!celeb) {
        return next();
      }
      res.render('celebrities/edit', celeb);
    })
    .catch(next);
});

router.post('/:id/edit', requireLoggedInUser, isIdValid, (req, res, next) => {
  const celebId = req.params.id;
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate(celebId, { name, occupation, catchPhrase }, { new: true })
    .then((result) => {
      console.log(result);
      res.render('celebrities/details', result);
    })
    .catch(next);
});

router.get('/:id', isIdValid, (req, res, next) => {
  const celebId = req.params.id;
  Celebrity.findById(celebId)
    .then(celeb => {
      console.log(celeb);
      res.render('celebrities/details', celeb)
        .catch(next);
    });
});

module.exports = router;
