const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// lista celebridades na home
router.get('/celebrities/index', (req, res) => {
  Celebrity
  .find()
  .then(celebrity => {
    console.log(celebrity)
    res.render('celebrities/index', {celebrity})})
  .catch(error => console.log(error))
});

// info sobre cada celebridades 
router.get('/celebrities/show/:celebrityId', (req, res) => {
  const {
    celebrityId
  } = req.params;

  Celebrity
    .findById(celebrityId)
    .then(celebrity => {
      res.render('celebrities/show', {
        celebrity
      });
    })
    .catch(error => console.log(error));
});

router.get('/celebrities/new', (req, res) => {
  res.render('celebrities/new');
})

//add nova celebridade
router.post('/celebrities/new', (req, res) => {
  console.log('body: ', req.body);

  const {
    name,
    occupation,
    catchPhrase
  } = req.body;

  Celebrity.create({
    name,
    occupation,
    catchPhrase
    })
    .then(response => {
      // console.log(response);
      res.redirect('/celebrities/index');
    })
    .catch(error => console.log(error));
});



// deletar celebridade
router.post('/celebrities/:celebrityId/delete', (req, res) => {
  const {
    celebrityId
  } = req.params;
    console.log(celebrityId);
  Celebrity
    .findByIdAndRemove(celebrityId)
    .then(response => {
    res.redirect('/celebrities/index');
    })
    .catch(error => console.log(error));
});



// celebrity edit
router.get('/celebrities/edit/:celebritiesId', (req, res) => {
  const {
    celebritiesId
  } = req.params;
  Celebrity
    .findById(celebritiesId)
    .then(celebrity => {
      // console.log(book);
      res.render('celebrities/edit', {
        celebrity 
      });
    })
    .catch(error => console.log(error));
});



//POST edit
router.post('/celebrities/edit', (req, res) => {
  const {
    celebritiesId, name, occupation, catchPhrase
  } = req.body

  Celebrity
  .findByIdAndUpdate(celebritiesId, {$set: {
    name, occupation, catchPhrase}
  }, {
    new: true
  })
  .then(response => {
    // console.log(response);
    res.redirect(`/celebrities/show/${celebritiesId}`);
  })
  .catch(error => console.log(error));
});



module.exports = router;
