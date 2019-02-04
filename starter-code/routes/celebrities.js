const express = require("express");
const router = express.Router();
const Celeb = require("../models/celebrity");
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/celebrities', (req, res, next) => {
  Celeb.find()
      .then((celebs) => {
        console.log(celebs)
        res.render('celebrities/index', { celebs })
      })
      .catch((err) => {
          if (err) {
              next();
              return err
          }
      })
})
router.get('/celebrities/:id', (req, res, next) => {

  let celebId = req.params.id;
  Celeb.findById(celebId)
      .then((details) => {
          res.render('celebrities/show', { details });
      })
      .catch((err) => {
          if (err) {
              next();
              return err
          }
      })
})
router.post('/celebrities/:id', (req, res, next) => {
  const { name, occupation, catchphrase } = req.body;
  
  Celeb.findByIdAndUpdate(req.params.id, { name, occupation, catchphrase })
      .then(() => {
          res.redirect('/celebrities');
      })
      .catch((err) => {
          next();
          return err
      })

})
router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new')
})

router.post('/celebrities/new', (req, res, next) => {
  const { name, occupation, catchphrase } = req.body;
  let newCeleb = new Celeb({ name, occupation, catchphrase })

  newCeleb.save()
      .then((celeb) => {
          res.redirect('/celebrities/');
      })
      .catch((err) => {
          console.log(err);
          res.render('celebrities/new');
      })
})
router.post('/celebrities/:id/delete', (req, res, next) => {

  Celeb.findByIdAndDelete(req.params.id)
      .then(() => {
          res.redirect('/celebrities');
      })
      .catch((err) => {
          res.redirect('/');
          next();
          return err
      })
})

router.get('/celebrities/:id/edit', (req, res, next) => {

  Celeb.findById(req.params.id)
      .then((celeb) => {
          res.render('celebrities/edit', celeb);
      })
      .catch((err) => {
          next();
          return err
      })
})


module.exports = router;