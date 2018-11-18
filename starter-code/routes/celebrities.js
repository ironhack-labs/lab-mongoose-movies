const express = require('express');
const router = express.Router();

const Celebrity = require("../models/Celebrity")


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/celebrities", (req, res) => {
  Celebrity.find()
    .then((celebrities) => {
      res.render("celebrities", { celebrities })
    })
    .catch((err) => {
      console.log("error while listing celebrities"+err)
    })
})

//FIND CELEBRITIES BY ID

router.get("/celebrities/:id", (req, res) => {
  Celebrity.findById(req.params.id)
    .then((celebrities) => {
      res.render("../celebrities/show", { celebrities })
    })
    .catch((err) => {
      console.log("The error is in finding each celebrity by its id" + err)
    })
})


// The error is in finding each celebrity by its idCastError: Cast to ObjectId failed for value "new" at path "_id" for model "Celebrity"


//NEW CELEBRITY
router.get("/celebrities/new", (req, res) => {
  res.render("./celebrities/new")
})

router.post("/celebrities", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase })
  newCelebrity.save()
    .then(() => {
      res.redirect("/celebrities")
    })
    .catch((error) => {
      console.log("Error while creating new celebrities" + error)
    })
})

//DELETING CELEBRITIES
router.post("/celebrities/:id/delete", (req, res) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect("/celebrities")
    })
    .catch((err) => {
      console.log("error while deleting celebrity" + err)
    })
})

//EDITING CELEBRITIES
router.get("/celebrities/:id/edit", (req, res) => {
  Celebrity.findById(req.params.id)
    .then((celebrities) => {
      res.render("./celebrities/edit", { celebrities })
    })
    .catch((err) => {
      console.log("error while editing" + err)
    })
})

router.post("/celebrities/:id", (req, res) => {
  const { name, occupation, catchPhrase } = req.body
  Celebrity.update(
    { _id: req.params.id },
    { $set: { name, occupation, catchPhrase } },
    { new: true }
  )
    .then(() => {
      // console.log(Celebrity)
      res.redirect("/celebrities/")
    })
    .catch((err) => {
      console.log("error while editing" + err)
    })
})



module.exports = router;