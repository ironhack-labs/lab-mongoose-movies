const express = require('express');
const router = express.Router();
const Celebrity = require("../models/Celebrity")

/* GET home page */
router.get('/', (req, res, next) => {
  res.redirect("celebrities");
});

router.get("/celebrities", (req, res, next) => {
  Celebrity.find({}).then(celebrities => {
    res.render("celebrities/index", {
      celebrities
    })
  }).catch(err => {
    console.log(err);
    next();
  });

  // res.render("")
});

router.post("/celebrities", (req, res, next) => {
  console.log("req.body:", req.body);
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }).then(newCelebrity => {
    res.redirect("celebrities/" + newCelebrity._id)
  }).catch(err => {
    console.log(err);
    next();
  });
})

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new.hbs")
})

router.get("/celebrities/:celebrityId", (req, res, next) => {
  Celebrity.findById(req.params.celebrityId).then(celebrityDetails => {
    res.render("celebrities/show", {
      celebrityDetails
    })
  }).catch(err => {
    console.log(err);
    next();
  })
})

router.post("/celebrities/:celebrityId/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.celebrityId).then((removedCelebrity) => {
    console.log(removedCelebrity);
    res.redirect("/celebrities");
  }).catch(err => {
    console.log(err);
    next();
  })
})

router.get("/celebrities/:celebrityId/edit", (req, res, next) => {
  Celebrity.findById(req.params.celebrityId).then((celebrity) => {
    res.render("celebrities/edit", { celebrity })
  }).catch(err => {
    console.log(err);
    next();
  });
})

router.post("/celebrities/edit", (req, res, next) => {
  Celebrity.findOneAndUpdate({
    _id: req.params.celebrityId
  }).then(celebrity => {
    console.log(celebrity);
      res.redirect(`celebrities/${celebrity._id}`);
  }).catch(err => {
    console.log(err);
    res.redirect("celebrities");
  })
})



module.exports = router;