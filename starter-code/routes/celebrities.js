const express = require('express');
const router = express.Router();
const celebrities = require("../models/celebrity");

/* GET celebrities */
router.get('/', (req, res, next) => {
  celebrities.find()
    .then(allTheCelebrities => {
      console.log('Retrieved celebrities from DB:', allTheCelebrities);
      res.render("celebrities/index", {
        celebrities: allTheCelebrities
      });
    })
    .catch(error => {
      console.log('Error while getting the celebrities from the DB: ', error);
    })

});

router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});


router.get("/:id", (req, res, next) => {
  celebrities.findOne({
      '_id': req.params.id
    })
    .then(theCelebrity => {
      res.render('celebrities/show', {
        celebrity: theCelebrity
      });
    })
    .catch(error => {
      console.log('Error while retrieving celebrity ID: ', error);
    })
});

router.get("/:id/edit", (req, res, next) => {
  celebrities.findOne({
      '_id': req.params.id
    })
    .then(theCelebrity => {
      res.render('celebrities/edit', {
        theCelebrity
      });
    })
    .catch(error => {
      console.log('Error trying to edit the celebrity: ', error);
    })
});

router.post("/:id/edit", (req, res, next) => {
  const {
    cName,
    cOccupation,
    cCatchPhrase
  } = req.body;
  celebrities.findOneAndUpdate({
      "_id": req.params.id
    }, {
      $set: {
        cName,
        cOccupation,
        cCatchPhrase
      }
    })
    .then((celebrity) => {
      res.redirect('/celebrities');
    })
    .catch((error) => {
      console.log(error);
    })
});

router.post("/:id/delete", (req, res, next) => {
  celebrities.findOneAndRemove({
      '_id': req.params.id
    })
    .then(res.redirect("/celebrities"))
    .catch(error => {
      console.log('Error while deleting celebrity: ', error);
    })
});



router.post('/new', (req, res, next) => {
  const {
    cName,
    cOccupation,
    cCatchPhrase
  } = req.body;
  const newCelebrity = new celebrities({
    cName,
    cOccupation,
    cCatchPhrase
  })
  newCelebrity.save()
    .then((celebrities) => {
      res.redirect('/');
    })
    .catch((error) => {
      console.log('Error while creating new celebrity');
      res.render("celebrities/new");
    })
});

module.exports = router;