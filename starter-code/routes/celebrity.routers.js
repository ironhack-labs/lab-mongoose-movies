const express = require('express');
const router = express.Router();

const Celebrity = require('../models/Celebrity.model');

//new GET
router.get('/celebrities/new', (req, res) => res.render('celebrities-views/new'))

//new POST
router.post('/celebrities', (req, res) => {
  // Celebrity.create(req.body)
  //   .then(saved => {
  //     // console.log("saved new celebrity", saved);
  //     res.redirect('/celebrities')
  //   })
  //   .catch(err => console.log(`Err while saving new celebrity in DB: ${err}`));

  const { firstName, lastName, occupation, catchPhrase } = req.body;
  const celeb = new Celebrity({ firstName, lastName, occupation, catchPhrase });
  celeb.save()
    .then(saved => res.redirect('/celebrities'))
    .catch(err => res.render('celebrities-views/new'));
})

//get list from db
router.get('/celebrities', (req, res) => {
  Celebrity.find()
    .then(allCelebrities => {
      //console.log("from db ", allCelebrities)
      res.render('celebrities-views/celebritiesList', { cel: allCelebrities });
    })
    .catch(err => console.log("Error finding obj in db ", err));
});

//edit GET
router.get('/celebrities/:id/edit', (req, res) => {
  console.log("inside get update");
  Celebrity.findById(req.params.id)
    .then(foundCel => {
      console.log(`found celebrity for update ${foundCel}`)
      res.render('celebrities-views/edit', { foundCel })
    })
    .catch(err => console.log("Error finding obj in db for edit ", err))
});
//edit POST
router.post('/celebrities/:id/edit', (req, res) => {
  Celebrity.findByIdAndUpdate(req.params.id, req.body)
    .then(updated => res.redirect('/celebrities'))
    .catch(err => console.log("Error updating obj in db ", err))
});
//delete
router.post('/celebrities/:id/delete', (req, res) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/celebrities'))
    .catch(err => console.log("Error deleting obj in db ", err));
});

//details
router.get('/celebrities/:someId', (req, res) => {
  Celebrity.findById(req.params.someId)
    .then(found => {
      res.render('celebrities-views/details', found);
    })
    .catch(err => console.log(`Err while getting the specific celebrity from the  DB: ${err}`));
});



module.exports = router;