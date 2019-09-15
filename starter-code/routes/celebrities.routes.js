const express = require("express");
const celebritiesRouter = express.Router();
const Celebrities = require("./../models/Celebrities");

// List all the celebrities
celebritiesRouter.get("/", (req, res) => {
  Celebrities.find().then(allCelebrities => {
    res.render("celebrities/index", {
      allCelebrities: allCelebrities
    });
  });
});

// Show the detail of a celebrity
celebritiesRouter.get("/detail/:id", (req, res) => {
  Celebrities.findById(req.params.id).then(celebrity => {
    res.render("celebrities/detail", {
      celebrity: celebrity
    });
  });
});

// View for create a new celebrity
celebritiesRouter.get("/new", (req, res) => {
  res.render("celebrities/new");
});

// Add a new celebrity
celebritiesRouter.post("/new", (req, res) => {
  let name = req.body.name;
  let occupation = req.body.occupation;
  let catchPhrase = req.body.catchPhrase;

  if (!name || !occupation || !catchPhrase) {
    res.redirect("/celebrities/new");
    return;
  }

  Celebrities.create({
    name: name,
    occupation: occupation,
    catchPhrase: catchPhrase
  }).then(celebrityCreated => {
    res.redirect("/celebrities");
  });
});

// View to edit a celebrity
celebritiesRouter.get("/edit/:id", (req, res) => {
  Celebrities.findById(req.params.id).then(celebrity => {
    res.render("celebrities/edit", { celebrity: celebrity });
  });
});

// Update a celebrity
celebritiesRouter.post("/edit", (req, res) => {
  let _id = req.body._id;
  let name = req.body.name;
  let occupation = req.body.occupation;
  let catchPhrase = req.body.catchPhrase;

  Celebrities.findByIdAndUpdate(_id, {
    name: name,
    occupation: occupation,
    catchPhrase: catchPhrase
  }).then(celebrityUpdate => {
    res.redirect(`/celebrities/detail/${_id}`);
  });
});

// View to delete a celebrity
celebritiesRouter.get("/delete/:id", (req, res) => {
  Celebrities.findById(req.params.id).then(celebrity => {
    res.render("celebrities/delete", { celebrity: celebrity });
  });
});

// Delete a celebrity
celebritiesRouter.post("/delete", (req, res) => {
  let celebrityId = req.body._id

  if (celebrityId) {
    Celebrities.findByIdAndDelete(celebrityId).then(celebrityDeleted => {
      res.redirect("/celebrities")
    })
  }
})

module.exports = celebritiesRouter;
