const express = require('express');
const router = express.Router();
const Celebrity = require("../models/Celebrity");

/* GET home page */


router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebrity => res.render('celebrities/index', {
      celebrity
    }))
    .catch(() => {
      next()
    })
});

router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findOne({
      '_id': req.params.id
    })
    .then(celebrityFound => {
      res.render('celebrities/show', {
        celebrityFound
      })
    })
    .catch(() => {
      next()
    })
});

router.get(`/celebrities/new`, (req, res, next) => res.render('celebrities/new'))

router.post(`/celebrities/`, (req, res, next) => {
  const {
    name,
    occupation,
    catchPhrase
  } = req.body;
  // console.log(name, occupation, catchPhrase)
  Celebrity.create({
    name,
    occupation,
    catchPhrase
  })
    .then(() => res.redirect(`celebrities`))
    .catch(error => {
      res.redirect(`celebrities/new`)
    })
})

router.post(`/celebrities/:id/delete`, (req, res, next) => {
   Celebrity.findByIdAndRemove({
       '_id': req.params.id
     })
     .then(() => {
       res.redirect("/celebrities");
     })
     .catch(() => {
       next();
     });
   });



router.post("/celebrities/:id/edit", (req, res, next) => {
  Celebrity.find({
      _id: req.params.id
    })
    .then(celebrityEdit => {
      res.render("celebrities/edit", {
        celebrityEdit
      });
    })
    .catch(() => {
      next();
    });
});

router.post("/celebrities/:id/", (req, res, next) => {
  Celebrity.findByIdAndUpdate({
      _id: req.params.id
    }, req.body)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(() => {
      next();
    });
});

module.exports = router;