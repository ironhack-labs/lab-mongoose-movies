const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity')


router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(allTheCelebritiesFromDB => {
      res.render('celebrities', {
        celebrities: allTheCelebritiesFromDB
      });
    })
    .catch(error => {
      console.log(error)
      next()
    })
});

router.post('/', (req, res, next) => {
  const newCelebrity = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }

  Celebrity.create(newCelebrity)
    .then(() => {
      res.render('celebrities/new')
    })
    .catch((error) => {
      console.log(error)
      next()
    })
})

router.get('/new', (req, res, next) => {
  res.render("celebrities/new");
});

router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(theCelebrity => {
      res.render('celebrities/show', {
        celebrities: theCelebrity
      });
    })
    .catch(error => {
      console.log(error)
      next()
    })
});

router.post('/:id', (req, res, next) => {
  Celebrity.updateOne({
      _id: req.body.id
    }, {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
    })
    .then(() => {
      res.redirect('/celebrities')
    })
})

router.post('/delete/:id', (req, res, next) => {
  Celebrity.findByIdAndDelete(req.body.id)
    .then((celebrity) => {
      res.render('celebrities')
    })
    .catch((error) => {
      console.log(error)
      next()
    })
})

router.get('/edit/:id', (res, req, next) => {
  Celebrity.findById(req.params.id)
    .then(theCelebrity => {
      res.render('celebrities/edit', theCelebrity)
    })
    .catch((error) => {
      console.log(error)
      next()
    })
})

router.post('/edit/:id', (req, res, next) => {
  Celebrity.findOne({
      _id: req.body.id
    })
    .then((celebrity) => {
      res.render('celebrities/edit', celebrity)
    })
    .catch((error) => {
      console.log(error)
      next()
    })
});


module.exports = router;
