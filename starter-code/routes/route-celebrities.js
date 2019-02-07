const express = require("express");

const router = express.Router();

const Celebrities = require("../models/celebrity.js");

router.get("/celebrities", (req, res, next) => {
  Celebrities.find()
    .then(celebResult => {
      res.locals.celebResult = celebResult;
      res.render("celebrities/index.hbs");
    })
    .catch(err => next(err));

})

router.get("/celebrities/:celebId", (req, res, next) => {
  // res.send(req.params);
  const {
    celebId
  } = req.params;

  // find the book in the data base using the ID from the address
  Celebrities.findById(celebId)
    .then(celebDoc => {
      // send the database query result to the hbs file as bookItem
      res.locals.celebItem = celebDoc;
      res.render('celebrities/show.hbs');
    })
    .catch(err => next(err))
})

router.get("/celebrity-add", (req, res, next) => {
  res.render("celebrities/new.hbs");
})

router.post("/process-celeb", (req, res, next) => {
  const {
    name,
    occupation,
    catchPhrase,
  } = req.body;

  Celebrities.create({
      name,
      occupation,
      catchPhrase,
    })
    .then(celebDoc => {
      // redirect if it's succesfull
      // only adress no .hbs
      // redirect to the book page with ${bookDoc._id}
      res.redirect(`/celebrities/${celebDoc._id}`)
    })
    .catch(err => next(err))
})

router.get("/celebrities/:celebId/delete", (req, res, next) => {
  const {
    celebId
  } = req.params;
  Celebrities.findByIdAndRemove(celebId)
    .then(celebDoc => {
      res.redirect("/");

    })
    .catch(err => next(err))
})

// Netflix style of address - PATH PARAMS
router.get("/celebrities/:celebId/edit", (req, res, next) => {
  const {
    celebId
  } = req.params;
  Celebrities.findById(celebId)
    .then(celebDoc => {
      res.locals.celebItem = celebDoc;
      res.render("celebrities/new.hbs")
    })
    .catch(err => next(err))
});
module.exports = router