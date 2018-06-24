const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');



router.get('/add', (req, res, next) => {
  res.render("celebrities/new")
});

router.post('/add', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase})
  newCelebrity.save()
  .then((celebrity) => {
    res.redirect('/celebrities')
  })
  .catch((error) => {
    console.log(error)
    res.redirect('/celebrities/add')
  })
});


router.post('/:id/delete', (req, res, next) => {

  let celebrityId = req.params.id;
  Celebrity.findByIdAndRemove(celebrityId)
  .then((celebrity) => {
    if (!celebrity) {
      return res.status(404).render('not-found');
  }
  console.log('Deleting succes!!');
  res.redirect('/celebrities')
    })
    .catch(next)
});

router.get('/:id/edit', (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findById(celebrityId)
  .then((celebrity) => {
    res.render("celebrities/celebrityEdit", celebrity)
  })
  .catch((error) => {
    console.log(error)
  })
});

router.post('/:id/edit', (req, res, next) => {
  let celebrityId = req.params.id;
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.update({_id: celebrityId}, { $set: {name, occupation, catchPhrase}},{new: true})
  .then((celebrities) => {
    res.redirect('/celebrities')
  })
  .catch((error) => {
    console.log(error)
  })
});


router.get('/', (req, res, next) => { 

  Celebrity.find().then(celebrities => {
    res.render('celebrities/index',{celebrities});
  })
  .catch(next)
});

router.get('/:id', (req, res, next) => {

    let celebrityId = req.params.id;
    if (!req.params.id) { 
      return res.status(404).render('not-found');
    }
    Celebrity.findById(celebrityId)
      .then(celebrity => {
        if (!celebrity) {
            return res.status(404).render('not-found');
        }
        res.render("celebrities/show", celebrity)
      })
      .catch(next)
  });

  module.exports = router;