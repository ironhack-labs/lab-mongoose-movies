const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


// View list of celebrities
router.get('/celebrities', (req, res, next) => {
  Celebrity.find().then(celebrities => {
    console.log(celebrities)
    res.render('celebrities-list.hbs', { celebrities })
  })
  .catch(error => {
    console.log(error)
  })
})


// Add new celebrity
router.get('/celebrity/new', (req, res, next) => {
  res.render('new-celebrity.hbs')
})


router.post('/celebrity/new', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
  newCelebrity.save()
  .then((celebrity) => {
    res.redirect('/celebrities')
  })
  .catch(err => {
    console.log(err)
  })
})

// View individual celebrity detais
router.get('/celebrity/:id', (req, res, next) => {
  console.log(req.params)
  Celebrity.findOne({ _id: req.params.id }).then(celebrity => {
    console.log(celebrity)
    res.render('celebrity-details.hbs', { celebrity })
  })
  .catch(err => {
    console.log(err)
  })
})

// Delete Celebrity
router.post('/celebrity/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/celebrities')
  })
    .catch(err => {
      console.log(err);
    })
})


//Edit Celebrity

router.get('/celebrity/:id/edit', (req, res, next) => {
  console.log(req.params)
  Celebrity.findById(req.params.id).then(celebrity=> {
    console.log(celebrity)
    res.render('celebrity-edit.hbs', celebrity)
  })
  .catch((error) => {
    console.log(error)
  })
})


router.post('/celebrity/:id/edit', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate(req.params.id, { name, occupation, catchPhrase })
  .then(() => {
    res.redirect('/celebrities')
  })
  .catch(err => {
    console.log(err)
  })
})



module.exports = router;
