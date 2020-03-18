const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity'); // <== this line



router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render('celebrities/index', { celebrities: celebrities });
    })
    .catch(error => {
      console.log('Error while getting the celebrities from the DB: ', error);
    })
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/new', (req, res, next) => {
  const {name,occupation,catchPhrase} = req.body
  const newCelebrity = new Celebrity({name,occupation,catchPhrase})  
  newCelebrity.save()
  .then(() => {
    res.redirect('/');
  })
  .catch(error => {
    console.log('Error while getting the celebrities from the DB: ', error);
  })
});

router.get('/:id', (req, res, next) => {
  Celebrity.findById( req.params.id)
    .then(celebrity => {
      res.render('celebrities/show', { celebrity });
    })
    .catch(error => {
      console.log('Error while getting the celebrity from the DB: ', error);
    })
});
router.post('/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndDelete( req.params.id)
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch(error => {
      console.log('Error while getting the celebrity from the DB: ', error);
    })
});

router.get('/:id/edit', async (req, res, next) => {
  let celebrity = await Celebrity.findById(req.params.id)
  res.render('celebrities/edit', celebrity);
})

router.post('/:id/edit', async (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  console.log(req.body)
  await Celebrity.updateOne({_id: req.params.id}, { $set: {name, occupation, catchPhrase}})
  res.redirect('/celebrities');
});



module.exports = router;
