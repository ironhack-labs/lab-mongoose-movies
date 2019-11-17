const express = require('express');
const router = express.Router();
const Celebrities = require("../Models/Celebrity")


/* GET home page */
router.get('/', (req, res, next) => {
  Celebrities.find()
    .then(celebrityInDB => {
      console.log(celebrityInDB)
      res.render('celebrities/index', {
        celebrityInDB
      });
    })
    .catch(error => {
      next();
      console.log(error)
    });
});

router.get('/celebrities/:id', (req, res, next) => {
  Celebrities.findById(req.params.id)
    .then(celebrity => {
      console.log(celebrity)
      res.render('celebrities/show',
        celebrity
      );
    })
    .catch(error => {
      next();
      console.log(error)
    });
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
})

router.post("/celebrities", (req, res) => {
  Celebrities.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  // }).then((newCelebrity) => {
    // Celebrities.save(newCelebrity)
  }).then(() => {
    res.redirect("/");
  })
  .catch(error => {
    res.redirect("/celebrities/new");
    console.log(error)
  });
});
module.exports = router;