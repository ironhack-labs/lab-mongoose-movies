const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrityModels');

// router.get("/celeb", (req, res, next) => {
//   res.render("celebrityFolder/celebrityHbs.hbs");
// });


// locate the list of celebs
router.get('/celeb', (req, res, next) => {
  Celebrity.find()
    .then((allTheCelebrities) => {
      res.render('celebrityFolder/celebrityHbs',{celebrity: allTheCelebrities})
    })
    .catch((err) => {
      next(err);
    })
});


// route to create celeb
router.get('/new', (req, res, next) => {
  res.render('celebrityFolder/newCelebrityHBS')
});

router.post("/create", (req, res, next) => {
  Celebrity.create(req.body)
    .then(() => {
      res.redirect("/celebrity/celeb");
    })
    .catch(err => {
      next(err);
    });
});

router.get('/:theId/edit', (req, res, next) => {
  Celebrity.findById(req.params.theId)
    .then((theCelebrity) => {
      res.render('celebrityFolder/editCelebrity', { theCelebrity: theCelebrity })
    })
    .catch((err) => {
      next(err);
    })
});


router.post('/:id/update', (req, res, next) => {

  Celebrity.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect("/celebrity/celeb");
    })
    .catch((err) => {
      next(err)
    })
})


// route for each celeb
router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((theCelebrity) => {
      res.render('celebrityFolder/celebrityShowDetailsHbs.hbs', theCelebrity)
    })
    .catch((err) => {
      next(err);
    })
});

// route to delete the celeb > in see details

router.post('/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect("/celebrity/celeb");
    })
    .catch((err) => {
      next(err);
    })
})
module.exports = router;
