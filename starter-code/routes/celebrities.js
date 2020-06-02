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

router.get('/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
  .then(celebrity => {
    res.redirect("/celebrities");
  })
  .catch((error) => {
    console.log(error);
  });
});

router.get('/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then(celebrity => {
    res.render('celebrities/edit', celebrity);
  })
  .catch((error) => {
    console.log(error);
  });
});

router.post('/:id/edit', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.update({_id: req.params.id}, { $set: {name, occupation, catchPhrase }}, {new: true})
  .then(celebrity => {
    res.redirect('/celebrities');
  })
  .catch((error) => {
    console.log(error);
  });
});

router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render('celebrities/show', celebrity);
    })
    .catch(error => {
      console.log('Error while getting the celebrities from the DB: ', error);
    });
});



module.exports = router;
