const express = require('express');
const router = express.Router();
const Celebrities = require("../models/Celebrity");


router.get('/', (req, res, next) => {
  res.render('index')
})

router.get('/celebrities', (req, res, next) => {
  Celebrities
    .find()
    .then(allCelebs => {
      res.render('celebrities/index', { allCelebs });
    })
    .catch(err => {
      next();
      console.log(`There was an error : \n ${err}`)
    })
})

router.get('/celebrities/:id', (req, res, next) => {
  let id = req.params.id
  Celebrities
    .find({ _id: id })
    .then(celebFound => {
      res.render("celebrities/show", { celebFound })
    })
    .catch(err => {
      next();
      console.log(`There was an error : \n ${err}`)
    })
});

router.get('/celebrities/new', (req, res, next) => {
  res.render("celebrities/new")
});

// Create movie
router.post('/celebrities/new', (req, res, next) => {
  // Check if already exists a celebrity with the name passed
  // in the form. If doesn't create it and redirect to the celebrity list
  Celebrities.findOne({ name: req.body.name })
    .then(existCeleb => {
      if (existCeleb !== null) {
        res.json({ alert: "this celebrity is already in the database" })
      } else {
        Celebrities
          .create({
            name: req.body.name,
            occupation: req.body.occupation,
            catchPhrase: req.body.catchPhrase
          })
          .then(createdCeleb => {
            createdCeleb
              .save(err => {
                if (err) return handleError(err);
                res.redirect("/celebrities")
              })
              .catch(err => {
                console.log(`There has been an error creating the new celeb: \n ${err}`);
                res.render("celebrities/new")
              })
          });
      }
    })
})

router.post('/celebrities/:id/delete', (req, res, next) => {
  Celebrities.
    findByIdAndDelete({ _id: req.params.id })
    .then(deletedCeleb => {
      res.redirect("/celebrities")
    })
    .catch(err => {
      next();
      console.log(`There has been an error creating the new celeb: \n ${err}`);
    })
})

router.get('/celebrities/:id/edit', (req, res, next) => {
  Celebrities
    .find({ _id: req.params.id })
    .then(celebToEdit => {
      res.render('celebrities/edit', { celebToEdit })
    })
    .catch(err => {
      next();
      console.log(`There has been an error creating the new celeb: \n ${err}`);
    })
})


router.post('/celebrities/:id/', (req, res, next) => {
  Celebrities
    .findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(updatedCeleb => {
      res.redirect('/celebrities')
    })
    .catch(err => {
      next();
      console.log(`There has been an error creating the new celeb: \n ${err}`);
    })
})


module.exports = router;
