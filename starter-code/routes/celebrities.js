const express = require("express");
const router = express.Router();

// Iteration 2:
const Celebrity = require("../models/celebrity-model"); // celebrity-model.js

router.get("/celebrities", (request, response, next) => {
  Celebrity.find()
    .then((celebrityArray) => {
      console.log(celebrityArray);
      response.render("celebrities/index", { celebrityArray }); // with brackets
    })
    .catch((error) => {
      console.log(error);
      next();
    });
});

// Iteration 3:
router.get("/celebrities/:celebId", (request, response, next) => {
  Celebrity.findById(request.params.celebId)
    .then((celebrityDetails) => {
      console.log(celebrityDetails);
      response.render("celebrities/show", celebrityDetails); // without brackets
    })
    .catch((error) => {
      console.log(error);
      next();
    });
});

// Iteration 4:
router.get("/celebrities/new", (request, response) => {
  response.render("celebrities/new");
});

router.post("/celebrities/new", (request, response) => {
  const { name, occupation, catchPhrase } = request.body; // referring to 'name' attributes in <form> in new.hbs
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
  newCelebrity
    .save()
    .then((celebrity) => {
      console.log(celebrity);
      response.redirect("/celebrities");
    })
    .catch((error) => {
      console.log(error);
      response.render("celebrities/new");
    });
});

// Iteration 5:
router.post("/celebrities/:celebId/delete", (request, response, next) => {
  Celebrity.findByIdAndRemove(request.params.celebId)
    .then((celebrity) => {
      console.log(celebrity);
      response.redirect("/celebrities");
    })
    .catch((error) => {
      console.log(error);
      next();
    });
});

// Iteration 6:
router.get("/celebrities/:celebId/edit", (request, response, next) => {
  Celebrity.findById(request.params.celebId)
    .then((celebrityDetails) => {
      console.log(celebrityDetails);
      response.render("celebrities/edit", celebrityDetails);
    })
    .catch((error) => {
      console.log(error);
      next();
    });
});

router.post("/celebrities/:celebId", (request, response, next) => {
  const { name, occupation, catchPhrase } = request.body; // see also Iteration 4
  Celebrity.update(
    { _id: request.params.celebId },
    { $set: { name, occupation, catchPhrase } },
    { new: true }
  )
    .then((celebrity) => {
      console.log(celebrity);
      response.redirect("/celebrities");
    })
    .catch((error) => {
      console.log(error);
      next();
    });
});

// has to be included, otherwise app.use() wouldn't recognize this .js
module.exports = router;
