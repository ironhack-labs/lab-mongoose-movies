const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/Celebrity");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/celebrities", (req, res, next) => {
  Celebrity.find().then(celebsfromDB => {
    res.render("celebrities", {
      celebrities: celebsfromDB
    })
  })
    .catch(err => {
        console.log("An error happened:", err);
        res.render('error');
      });
});

router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id).then(celebsfromDB => {
    res.render("show", {
      celebrities: celebsfromDB
    })
    })
    .catch(err => {
      console.log("An error happened:", err);
      res.render('error');
  });
});

router.get('/new', (req, res, next) => {
  res.render("new-celebrity");
});

router.post("/new-celebrity", (req, res, next) => {
  Celebrity.create({  
    name: req.body.name,
    occupation: req.body.occupation,
    catchphrase: req.body.creator,
    image: req.body.image
  })
  .then(CelebrityCreated =>{
    res.redirect("/celebrities");
  })
});

router.get("/celebrities/:id/delete", (req, res, next) => {
  let celebrityId = req.params.id;
  console.log("celebrityID", celebrityId)
  Celebrity.findByIdAndDelete(celebrityId).then(celebrityRemoved => {
    res.redirect("/celebrities"); 
  });
});

router.get("/edit-celebrity/:id", (req, res, next) => {
  Celebrity.findById(req.params.id).then(celebrity => {
    res.render("edit-celebrity", { celebrity });
  });
});


router.post("/edit-celebrity/:id", (req, res, next) => {
  let celebrityId  = req.params.id;
  console.log("REQBOOOOODY", req.body.name)
  let { name, occupation, catchphrase, image } = req.body;
  Celebrity.findByIdAndUpdate(celebrityId, {
    name,
    occupation,
    catchphrase,
    image
  }).then(() => {
    res.redirect("/celebrities/" + celebrityId);
  });
});

module.exports = router;
