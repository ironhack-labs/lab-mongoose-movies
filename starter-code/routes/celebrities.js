const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrities');

// Listing Our Celebrities
router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      // console.log(celebrities);
      res.render("celebrities/index", { celebrities });
    })
    .catch(error => {
      next(error);
    });
});

// Adding New Celebrities
router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post('/', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
  newCelebrity.save()
  .then((celebrity) => {
    // console.log(celebrity);
    res.redirect('/celebrities');
  })
  .catch((error) => {
    console.log(error);
  });
});

// Deleting Celebrities
router.post('/:id/delete', (req, res, next) => {
  let celebrityId = req.params.id;
  if (!/^[0-9a-fA-F]{24}$/.test(celebrityId)) { 
    return res.status(404).render('not-found');
  }
  Celebrity.findByIdAndRemove({'_id': celebrityId})
    .then(celebrity => {
      // console.log(celebrity);
      if (!celebrity) {
          return res.status(404).render('not-found');
      }
      res.redirect('/celebrities');
    })
    .catch(error => {
      next(error);
    });
});

// Editing Celebrities
router.get('/edit', (req, res, next) => {
  Celebrity.findOne({_id: req.query.celebrity_id})
  .then((celebrity) => {
    res.render("celebrities/edit", {celebrity});
  })
  .catch((error) => {
    console.log(error);
  });
});

router.post('/:id', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.update({_id: req.query.celebrity_id}, { $set: { name, occupation, catchPhrase }}, { new: true })
  .then((celebrity) => {
    res.redirect('/celebrities');
  })
  .catch(error => {
    next(error);
  });
});

// The Celebrity Details Page
router.get('/:id', (req, res, next) => {
  let celebrityId = req.params.id;
  if (!/^[0-9a-fA-F]{24}$/.test(celebrityId)) { 
    return res.status(404).render('not-found');
  }
  Celebrity.findOne({'_id': celebrityId})
    .then(celebrity => {
      // console.log(celebrity);
      if (!celebrity) {
          return res.status(404).render('not-found');
      }
      res.render("celebrities/show", { celebrity });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;