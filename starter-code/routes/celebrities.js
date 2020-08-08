const express = require("express");
const router = express.Router();

const Celebrity = require("../models/Celebrity");

router.get("/", (req, res, next) => {
  Celebrity.find()
    .then((celebritiesFromDB) => {
      //console.log(`list of celebrities`, celebritiesFromDB);
      res.render("celebrities/index", { celebrities: celebritiesFromDB });
    })
    .catch((err) => {
      console.log(`Error while retrieving celebrities: ${err}`);
      next();
    });
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
    .then((celebritiesDetails) => {
      console.log(celebritiesDetails);
      res.render("celebrities/show", { details: celebritiesDetails });
    })
    .catch((err) => {
      console.log(`Error while retrieving celebrities: ${err}`);
      next();
    });
});

//create
router.get("/new", (req, res, next) => res.render("celebrities/new"));

router.post("/new", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.findOne({ name }) //do not create one if already exist
    .then((celebDocFromDB) => {
      if (!celebDocFromDB) {
        Celebrity.create({ name, occupation, catchPhrase }).then(() =>
          res.redirect("/celebrities")
        );
      } else {
        res.render("celebrities/new", {
          message:
            "It seems you are already have a celebrity with the same name",
        });
        return;
      }
    })
    .catch((err) =>
      console.log(`Error while creating a new celebrity: ${err}`)
    );
});

//delete
router.post("/:id/delete", (req, res, next) => {
  const { id } = req.params;
  Celebrity.findByIdAndDelete(id)
    .then(() => res.redirect(`/celebrities`))
    .catch((error) => {
      console.log(`Error while deleting the selected celebrity: ${error}`);
      next();
    });
});

//edit
router.get("/:id/edit", (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
    .then((celebrityToEdit) => {
      res.render("celebrities/edit", celebrityToEdit);
    })
    .catch((error) => console.log(`Error while editing celebrity: ${error}`));
});

router.post("/:id/edit", (req, res, next) => {
  const { id } = req.params;
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.findByIdAndUpdate(
    id,
    { name, occupation, catchPhrase },
    { new: true }
  )
    .then((updatedCelebrity) => res.redirect(`/celebrities`))
    .catch((error) => `Error while updating celebrity: ${error}`);
});

module.exports = router;
