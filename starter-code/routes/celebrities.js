const express = require('express');
const router  = express.Router();

const Celebrity = require("../models/celebrity.js");


router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(allCelebrities => {
        console.log(allCelebrities);
      res.render('celebrities/index', { celebrities: allCelebrities });
    })
    .catch(error => {
      console.log('Error while getting the celebrities from the DB: ', error);
    });
});


router.get("/new", (req, res, next) => {
  res.render('celebrities/new');
});

router.post("/new", (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  const newCelebrity = new Celebrity({name, occupation, catchPhrase});
  newCelebrity.save().then(celebrity => res.redirect("/celebrities")).catch(err => console.log(err));
});


router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
        console.log(celebrity);
      res.render('celebrities/show', celebrity);
    })
    .catch(error => {
      console.log('Error while getting the celebrities from the DB: ', error);
    });
});



module.exports = router;
