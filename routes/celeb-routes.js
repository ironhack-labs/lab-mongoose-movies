const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(allTheCelebrities => {
      res.render("celeb-views/index", { celebs: allTheCelebrities });
    })
    .catch(err => {
      next(err);
    });
});

router.get("/celebrities/details/:id", (req, res, next) => {
  let id = req.params.id;
  Celebrity.findById(id)
    .then(celebrityObject => {
      console.log(celebrityObject.image);
      res.render("celeb-views/show", { celeb: celebrityObject });
    })
    .catch(err => {
      next(err);
    });
});

router.get("/celebrities/add-new-celebrity", (req, res, next) => {
  res.render("celeb-views/new");
});

router.post("/celebrities/creation", (req, res, next) => {
  let name = req.body.theName;
  let occupation = req.body.theOccupation;
  let catchPhrase = req.body.theCatchPhrase;
  let image = req.body.theImage;

  Celebrity.create({
    name: name,
    occupation: occupation,
    catchPhrase: catchPhrase,
    image: image,
  })
    .then(result => {
      res.redirect("/celebrities/details/"+ result._id);
    })
    .catch(err => {
      next(err);
    });
});

router.post("/celebrities/delete/:id", (req, res, next) => {
  let id = req.params.id;
  Celebrity.findByIdAndRemove(id)
  .then((result)=>{
    res.redirect('/celebrities');
  }).catch((err)=>{
    next(err);
  })
});

router.get("/celebrities/edit-celeb/:id", (req, res, next) => {
  let id = req.params.id;
  Celebrity.findById(id)
  .then((theCelebrity) => {
    res.render("celeb-views/edit", {celeb: theCelebrity})
  })
  .catch((err) => {
    next(err);
  })
});

router.post("/celebrities/update/:id", (req, res, next) => {
  let id = req.params.id;
  Celebrity.findByIdAndUpdate(id, {
    name: req.body.theName,
    occupation: req.body.theOccupation,
    catchPhrase: req.body.theCatchPhrase,
    image: req.body.theImage,
  })
  .then((result) => {
    res.redirect("/celebrities/details/"+id)
  })
  .catch((err) => {
    next(err);
  })
})

module.exports = router;
