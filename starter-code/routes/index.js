const express = require('express');
const router = express.Router();
const Celebrity = require("../models/Celebrity.model")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/celebrities", async (req, res) => {
  try {

    const result = await Celebrity.find();

    res.render("celebrities", { celebrities: result });

  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
});

//GET create:

router.get("/celebrities/new", async (req, res) => {
  res.render("celebrities/new");
});

//POST creat:

router.post("/celebrities", (req, res) => {
  console.log(req.body);

  Celebrity.create(req.body).then((result) => {
    console.log(result);
    res.redirect("/celebrities")
  }).catch((err) => console.error(err));
});


//GET delete:

router.get("/celebrities/:id/delete", async (req, res) => {
  try {
    const result = await Celebrity.findByIdAndRemove({ _id: req.params.id });
    console.log(result);
    res.redirect("/celebrities");
  } catch (err) {
    console.error(err)
  }
});

/* //GET update:

router.get("/celebrities/:id/edit", async (req, res) => {
  try {
  const result = await Celebrity.findOne({_id: req.params.id});
  res.render("celebrities/edit", result);
  } catch (err) {
    console.error(err)
  }
})

//POST update:

router.post("/celebrities/:id", (req, res) => {
  Celebrity.updateOne({_id: req.params.id}, {$set: req.body})
  .then((result) => {
    console.log(result);
    res.redirect("/celebrities");
  }).catch((err) => console.error(err));
});
 */

router.get("/celebrities/:id", async (req, res) => {
  try {
    const result = await Celebrity.findOne({ _id: req.params.id });

    res.render("celebrities/show", result);
  } catch (err) {
    console.error(err);
  }
})


module.exports = router;
