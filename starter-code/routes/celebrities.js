const { request } = require("express");
const express = require("express");
const Celebrity = require("../models/celebrity");
const router = express.Router();

/* GET home page */
router.get("/celebrities", (request, result, next) => {
  Celebrity.find({})
    .then((celebrities) => {
      result.render("celebrity/index", celebrities);
    })
    .catch((error) => {
      console.log("Error reading celebrities: ", error);
      next(error);
    });
});

router.get("/celebrities/new", (request, result, next) => {
  result.render("celebrity/new");
});

router.post("/celebrities/new", (request, result, next) => {
  const celebrity = {
    name: request.body.name,
    occupation: request.body.occupation,
    catchPhrase: request.body.catchPhrase,
  };
  Celebrity.create(celebrity)
    .then((celebrity) => {
      console.log(`created new celebrity: ${celebrity.name}`);
      result.redirect("/celebrities");
    })
    .catch((error) => {
      console.log("Error creating celebrity: ", error);
      next(error);
    });
});

router.get("/celebrities/:id", (request, result, next) => {
  Celebrity.findById(request.params.id)
    .then((celebrity) => {
      console.log(`viewing: ${celebrity.name}`);
      result.render("celebrity/show", celebrity);
    })
    .catch((error) => {
      console.log("Error finding celebrity: ", error);
      next(error);
    });
});

router.get("/celebrities/:id/edit", (request, result, next) => {
  Celebrity.findById(request.params.id)
    .then((celebrity) => {
      console.log(`Editing celebrity: ${celebrity.name}`);
      result.render("celebrity/edit", celebrity);
    })
    .catch((error) => {
      console.log("Error finding celebrity: ", error);
      next(error);
    });
});

router.post("/celebrities/:id", (request, result, next) => {
  Celebrity.findByIdAndUpdate(request.params.id, {
    name: request.body.name,
    occupation: request.body.occupation,
    catchPhrase: request.body.catchPhrase,
  })
    .then((celebrity) => {
      console.log(`Updated celebrity: ${celebrity.name}`);
      result.redirect(`/celebrities/${request.params.id}`);
    })
    .catch((error) => {
      console.log("Error updating celebrity: ", error);
      next(error);
    });
});

router.post("/celebrities/:id/delete", (request, result, next) => {
  Celebrity.findByIdAndDelete(request.params.id)
    .then((celebrity) => {
      console.log(`Successfully deleted: ${celebrity.name}`);
      result.redirect("/celebrities");
    })
    .catch((error) => {
      console.log("Error deleting celebrity: ", error);
      next(error);
    });
});

module.exports = router;
