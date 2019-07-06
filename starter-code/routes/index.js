const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then(celebrities => {
    res.render('celebrities/index', { celebrities });
  })
  .catch(err => console.log(err));
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.get('/celebrities/:celebrityId', (req, res, next) => {
  const { celebrityId } = req.params;
  Celebrity.findById(celebrityId)
  .then(celebrity => {
    res.render('celebrities/show', celebrity);
  })
  .catch(err => console.log(err));
});

router.post('/celebrities', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const celeb = new Celebrity({ name, occupation, catchPhrase });
  celeb.save()
  .then(() => {
    res.redirect('/celebrities');
  })
  .catch((error) => {
    console.log(error);
  })
});

router.get('/celebrities/:celebId/edit', (req, res, next) => {
  const { celebId } = req.params;
  Celebrity.findById(celebId)
  .then(celebrity => {
    res.render('celebrities/edit', celebrity);
  })
  .catch((error) => {
    console.log(error);
  })
});

router.post('/celebrities/:celebrityId', (req, res, next) => {
  const { celebrityId } = req.params;
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.update({_id: celebrityId}, { $set: {name, occupation, catchPhrase}})
  .then(() => {
    res.redirect('/celebrities');
  })
  .catch(err => console.log(err));
});

router.post('/celebrities/:celebId/delete', (req, res, next) => {
  const { celebId } = req.params;
  Celebrity.findByIdAndRemove(celebId)
  .then(() => {
    res.redirect('/celebrities');
  })  
  .catch((error) => {
    console.log(error);
  })  
});  

module.exports = router;
