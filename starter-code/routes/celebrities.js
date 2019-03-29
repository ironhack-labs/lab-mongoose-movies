const express = require('express');
const router = express.Router();
const Celebrity = require("../models/Celebrity")

router.get('/', (req, res) => {
  Celebrity.find()
  .then(celebrities => {
    res.render('celebrities', {celebrities});
  })
  .catch(err => {
    console.log(err);
  })
});

router.get('/newCeleb', (req, res) => {
  res.render('newCeleb');
});

router.post('/newCeleb', (req, res) => {
  console.log(req.body);
  Celebrity.create(req.body)
  .then(() => {
    console.log(req.body);
    res.redirect('/celebrities')
  })
  .catch(err => {
    console.log(err);
  })
});

router.get('/:id', (req, res) => {
  const {id} = req.params;
  Celebrity.findById(id)
  .then(celebrity => {
    res.render('detailCeleb', celebrity);
  })
  .catch(err => {
    console.log(err);
  })
});

router.get('/:id/edit', (req, res) => {
  const { id } = req.params;
  Celebrity.findById(id)
  .then(celebrity => {
    res.render('newCeleb', celebrity);
  });
});

router.post('/:id/edit', (req, res) => {
  const { id } = req.params;
  Celebrity.findByIdAndUpdate(id, {$set: {...req.body}})
  .then(celebrity => {
    console.log(celebrity); 
    res.redirect('/celebrities');
  })
  .catch(err => {
    console.log(err);
  })
});

router.get('/:id/delete', (req, res) => {
  const { id } = req.params;
  Celebrity.findByIdAndDelete(id)
  .then(() => {
    res.redirect('/celebrities');
  });
});


module.exports = router;
