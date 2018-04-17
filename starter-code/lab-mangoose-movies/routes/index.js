const express = require("express");
const Celebrity = require("../models/celebrity-model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(celebritiesFromDb => {
      console.log(celebritiesFromDb);
      //res.send(celebritiesFromDb) => to see the results as a precaution;
      res.locals.celebrityList = celebritiesFromDb;
      res.render("celebrities-page");
      //res.render("books-page", {bookList: booksFromDb});
    })
    .catch(err => {
      // show the error page with this error
      next(err);
    });
});

router.get("/celebrity-form", (req, res, next) => {
  res.render("celebrity-form");
});

router.post("/process-celebrity", (req, res, next) => {
  //res.send(req.body);
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then(() => {
      res.redirect("celebrities");
    })
    .catch(err => {
      next(err);
    });
});

router.get("/celebrities/:celebrityId/edit", (req, res, next) => {
  res.locals.celebrityID = req.params.celebrityId;
  res.render("celebrity-edit");
});

router.post("/process-celebrity/:celebrityId", (req, res, next) => {
  //res.send(req.body);
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate(
    req.params.celebrityId,
    {
      //which doc to update
      name,
      occupation,
      catchPhrase
    }, // what changes to make
    { runValidators: true } // extra settings
  )
    .then(() => {
      res.redirect(`/celebrities-page/${req.params.celebrityId}`);
    })
    .catch(err => {
      next(err);
    });
});

//1ST UPDATE
router.get("/celebrities/:celebrityId", (req, res, next) => {
  Celebrity.findById(req.params.celebrityId)
    .then(celebrityDetails => {
      res.locals.celebrityId = req.params.celebrityId;
      res.locals.celebrity = celebrityDetails;
      res.render("edit");
    })
    .catch(err => {
      // show the error page with this error
      next(err);
    });
});

router.get("/celebrities/:celebrityId/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.celebrityId)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
