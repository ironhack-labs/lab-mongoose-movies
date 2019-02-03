const express = require('express');
const router = express.Router();
const Celebs = require("../models/celebrity");



router.get('/celebrities', (req, res, next) => {
  Celebs.find()
    .then((allCelebrities) => {
      res.render('celebrities/index', { allCelebrities });
    })
    .catch((error) => {
      console.log(error);
      next();
    });
});

router.get('/celebrities/:id', (req, res, next) => {
    Celebs.findById(req.params.id)
      .then(oneCeleb => {
        res.render("celebrities/show", {oneCeleb});
      })
      .catch(err => {
        console.log(err);
        next();
  });
})

router.get('/celebrities/new', (req, res, next) => {
  res.render("celebrities/new")
})

router.post('/celebrities', (req, res, next) => {
  console.log(req.body)
  const addCeleb = {
    name: req.body.celebName,
    occupation: req.body.celebOccupation,
    catchPhrase: req.body.celebPhrase
  }

  const newCeleb = new Celebs(addCeleb);

  newCeleb.save()

    .then(() => {
      console.log('added')
      res.redirect('/celebrities/')
    })
    .catch(err => {
      console.log(err);
      res.render("celebrities/new");
    })
});

router.post('/celebrities/:id/delete', (req, res, next) => {
  Celebs.findByIdAndRemove(req.params.id)
      .then(() => {
        res.redirect('/celebrities/')
      })
      .catch(err => {
        console.log(err);
        next();
  });
})

router.get('/celebrities/:id/edit', (req, res, next) => {
  Celebs.findById(req.params.id)
    .then(editCeleb => {
      res.render('celebrities/edit', {editCeleb})
    })
    .catch(err => {
      console.log(err);
    })
})

router.post('/celebrities/:id', (req, res, next) => {
  Celebs.update({_id:req.params.id}, { $set: {name: req.body.celebName, occupation: req.body.celebOccupation, catchPhrase:req.body.celebPhrase }})
      .then(() =>{
        res.redirect('/celebrities')
      })
      .catch(err => {
        console.log(err);
        next();
      });
})

module.exports = router;