const express = require("express");

const celebrityModel = require("../models/celebrities");

const router = express.Router();

//list of celebrities route
router.get("/celebrities", (req, res, next) => {
  celebrityModel
    .find()
    .exec()
    .then((celebrityResults) => {

      res.locals.listOfCelebrities = celebrityResults;


      res.render("celebrities/index");
    });
});

// add a celebrity routes
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
//-----------------------------





//celebrity show route
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
//--------------------------------



// edit route
router.get("/celebrities/:id/edit", (req, res, next) => {
  celebrityModel.findById(req.params.id)
  .then((celebrityFromDb) =>{

    res.locals.celebrityDetails = celebrityFromDb;
    res.render("celebrities/edit-celebrity");
  })

  .catch((err) => {
    next(err);
  });
});


router.post("/celebrities/:id", (req, res, next ) => {

  celebrityModel.findById(req.params.id)

  .then((celebrityFromDb) => {
    celebrityFromDb.set({
      name: req.body.celebrityName,
      ocupation: req.body.celebrityOcupation,
      catchPhrase: req.body.celebrityCatchphrase
    });

    res.locals.celebrityDetails = celebrityFromDb;

    return celebrityFromDb.save();
  })
  .then(() => {
    res.redirect(`/celebrities/${req.params.id}`);
  })
  .catch((err) => {
    next(err);
  });

});
//-------------------------



// Delete a celebrity route
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
