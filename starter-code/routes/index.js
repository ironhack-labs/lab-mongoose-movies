const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

//GET celebrities route -
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then((whatever) => {
      console.log('whatever', whatever)
      res.render('celebrities/index', { celebList: whatever })
    })
    .catch((error) => {
    })
});


router.get('/celebrities/new', (req, res, next) => {
  Celebrity.findOne({ '_id': req.query.id })
    .then((add) => {
      res.render('celebrities/new', { add }); //this is always relative to the views directory - 
    })
    .catch(error => {
      console.log('Error while retrieving details: ', error);
    })
});

router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findOne({ '_id': req.params.id })
    .then(details => {
      res.render('celebrities/show', { celebDetails: details });
    })
    .catch(error => {
      console.log('Error while retrieving details: ', error);
    })
});

router.get("/celebrities/:id/delete", (req, res, next) => { //this needs to be GET verb
  Celebrity.findOneAndDelete({ '_id': req.params.id })
    .then((celeb) => {
      res.redirect("/celebrities");
    })
    .catch(error => {
      console.log(error);
    });
});


router.get('celebrities/:celeb_id/edit', (req, res, next) => {
  Celebrity.findById(req.params.celeb_id).then((result) => {
    res.render('celebrities/edit', result);
  })
});

router.post('/celebrities/new', (req, res, next) => {
  // console.log("hello", req.body)
  const { name, occupation, catchPhrase } = req.body;

  const newCelebrity = new Celebrity({ name, occupation, catchPhrase });

  newCelebrity.save()
    .then((celeb) => {

      res.redirect('/celebrities');
    })
    .catch((error) => {
      console.log(error);
    })
});

router.post('celebrities/:celeb_id', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.update(
    { _id: req.params.celeb_id },
    { name, occupation, catchPhrase }).then(() => {
      res.redirect('/celebrities')
    })
});

router.get('/celebrities/:id/delete', (req, res, next) => {

  Celebrity.findOneAndDelete({ _id: req.params.id })
    .then((celeb) => {

      res.redirect("/celebrities")
    })
    .catch((error) => {
      console.log("something is wrong", error);
    })
});

module.exports = router;

