const express = require("express");
const router = express.Router();
const Celebrity = require("../../models/Celebrity");

//Iteration #2 listing our celebrities
router.get("/celebrities", (req, res) => {
  Celebrity.find()
    .then(celebrity => {
      res.render("celebrities/index", {
        celebrity
      });
    })
    .catch(err => {
      console.log(err);
    });
});

//Iteration #4 add celebrities
router.get("/celebrities/new", (req, res) => {
  let celebrityId = req.params.id;
  Celebrity.findOne({ _id: celebrityId })
    .then(celeb => {
      res.render("celebrities/new", celeb);
    })
    .catch(error => {
      console.log(error);
    });
});

//Iteration #3 celebrities details
router.get("/celebrities/:id", (req, res) => {
  let celebrityId = req.params.id;
  Celebrity.findOne({ _id: celebrityId })
    .then(celeb => {
      res.render("celebrities/show", celeb);
    })
    .catch(error => {
      console.log(error);
    });
});

//Insert a new Artists
router.post("/celebrities", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
  newCelebrity.save();
  Celebrity.find()
    .then(celebrity => {
      res.redirect("/celebrity/main/celebrities/new");
    })
    .catch(err => {
      console.log(err);
    });
});

//Delete a record
router.post("/celebrities/delete", (req, res) => {
  let id = req.body.id;
  console.log(id);

  Celebrity.findByIdAndRemove(id)
    .then(celebrity => {
      res.redirect("/celebrity/main/celebrities");
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
