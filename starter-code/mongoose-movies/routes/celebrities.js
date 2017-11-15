const express = require("express");

const celebrityModel = require("../models/celebrities");

const router = express.Router();


router.get("/celebrities", (req, res, next) => {
  celebrityModel
    .find()
    .exec()
    .then((celebrityResults) => {

      res.locals.listOfCelebrities = celebrityResults;


      res.render("celebrities/index");
    });
});


router.get("/celebrities/new", (req, res, next) =>{
  res.render("celebrities/new");
});


router.post("/celebrities", (req ,res ,next) => {
  const theCelebrity = new celebrityModel ({

    name:           req.body.celebrityName,
    ocupation:      req.body.celebrityOcupation,
    catchPhrase:    req.body.celebrityCatchphrase

  });
  theCelebrity.save()

  .then(() => {
    res.redirect("/celebrities");
  })

  .catch((err) => {
    next(err);
  });
});


router.get("/celebrities/:id", (req, res, next) => {
  celebrityModel.findById(req.params.id)
  .then((celebrityFromDb) =>{


    res.locals.celebrityDetails = celebrityFromDb;
    res.render("celebrities/show");

  })
  .catch((err) => {
    next(err);
  });
});

router.post("/celebrities/:id/delete" , (req, res, next) => {

  celebrityModel.findByIdAndRemove(req.params.id)

  .then((productFromDb) => {
    res.redirect("/celebrities");
  })

  .catch((err) => {
    next(err);
  });
});


module.exports = router;
