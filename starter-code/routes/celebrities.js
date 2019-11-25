const express = require('express');
const Celebrity = require('../models/Celebrity');
const router  = express.Router();

router.get('/', (req, res, next) => {
    Celebrity.find({})
      .then(celebrities => {
        res.render('./celebrities/index', {celebrities});
      })
      .catch(err => {
        console.log(err);
      })
  });

router.get("/new", (req, res) => {
    res.render("./celebrities/new.hbs");
});

router.get("/:celebrityId", (req,res) => {
console.log("success1");  
Celebrity.findById(req.params.celebrityId)
    .then(celebrity => {
        console.log("success2");
        res.render("./celebrities/celebrity.hbs", {celebrity});
    })
    .catch(err => {
        console.log(err);
    });
});

router.post("/new", (req, res) => {
    console.log("success3");
    const {
        name,
        occupation,
        catchphrase
    } = req.body;
    Celebrity.create({
        name,
        occupation,
        catchphrase
    })
        .then(newCelebrity => {
            res.redirect("/celebrities/" + newCelebrity._id);
        })
        .catch (err => {
            res.redirect("/celebrities/new");
        })
})

router.post("/:celebrityId/delete", (req, res) => {
    Celebrity.findByIdAndRemove(req.params.celebrityId)
        .then(result => {
            res.redirect("/celebrities");
        })
        .catch(err => {
            console.log(err);
        })
})

router.get("/:celebrityId/edit", (req, res) => {
    console.log("success5");
    const id = req.params.celebrityId;
    console.log(id);
    res.render("./celebrities/edit.hbs", {id});
})

router.post("/:celebrityId/edit", (req, res) => {
    console.log("success6");
    const {
        name,
        occupation,
        catchphrase
    } = req.body;
    Celebrity.findByIdAndUpdate(req.params.celebrityId,{
        name,
        occupation,
        catchphrase
    })
        .then(result => {
            res.redirect("/celebrities");
        })
        .catch(err => {
            console.log(err);
        })
})

module.exports = router;