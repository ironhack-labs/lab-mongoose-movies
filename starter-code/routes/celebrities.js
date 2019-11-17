const express = require('express');
const router = express.Router();
const Celebrities = require("../Models/Celebrity")
const bodyParser = require('body-parser');

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

router.post("/celebrities/:id", (req, res, next) => {
  Celebrities.updateOne({
      _id: req.params.id
    }, {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase

    })
    .then(() => {
      res.redirect("/");
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
    }).then(() => {
      res.redirect("/");
    })
    .catch(error => {
      res.redirect("/celebrities/new");
      console.log(error)
    });
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  Celebrities.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/");
    })
    .catch(error => {
      next();
      console.log(error)
    });
});

router.get('/celebrities/:id/edit', (req, res, next) => {
  Celebrities.findById(req.params.id)
    .then(celebrity => {
      console.log(celebrity)
      res.render('celebrities/edit',
        celebrity
      );
    })
    .catch(error => {
      next();
      console.log(error)
    });
});


module.exports = router;