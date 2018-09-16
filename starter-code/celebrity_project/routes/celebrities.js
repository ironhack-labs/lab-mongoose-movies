const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/Celebrity");


//GET celebrities
router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
      .then(celebrities => {
        res.render("celebrities/index", {celebrities});
      })
      .catch(error => {
        console.log(error)
    })
});


//GET Details
router.get('/celebrities/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
      .then(celebrities => {
        res.render("celebrities/show", {celebrities});
      })
      .catch(error => {
        console.log(error)
    })
});

//GET New
router.get('/new', (req, res, next) => {
        res.render("celebrities/new");
});

router.post("/new", (req, res) => {
    const { name, occupation, catchPhrase } = req.body;
    const celebrity = new Celebrity({ name, occupation, catchPhrase });
    celebrity.save( err => {
        if (err) {
            return next(err)
        }
        res.redirect('/celebrities');
  });
});

//DELETE celebrity
router.post("/celebrities/:id/delete", (req, res) => {
    Celebrity.findByIdAndRemove(req.params.id, () => res.redirect('/celebrities'))   
});

//EDIT celebrity
router.get("/celebrities/edit/:id", (req, res, next) => {
    let celebrityId = req.params.id;
    Celebrity.findOne({'_id': celebrityId})
    .then(celebrity => {
        res.render("celebrities/edit", celebrity);
    })
    .catch(error => {
        console.log(error)
    })
});

router.post("/celebrities/:id", (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;
    Celebrity.findByIdAndUpdate(req.params.id, {$set: {name, occupation, catchPhrase}})
    .then (() => {
        res.redirect("/celebrities");
    })
});

module.exports = router;
