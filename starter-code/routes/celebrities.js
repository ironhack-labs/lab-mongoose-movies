const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

router.get("/celebrities", (req, res) => {
  Celebrity.find()
    .then(celebrities => res.render("celebrities", { celebrities }))
    .catch(err => console.log(err));
});

// GET Create element CRUD
router.get("/celebrities/new", (req, res) => {
  res.render("celebrities/new");
});

// POST Create Celebrity
router.post("/celebrities", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  const celebrity = new Celebrity({ name, occupation, catchPhrase });
  celebrity.save()
    .then(() => res.redirect("/celebrities"))
    .catch(err => console.log(err));
});

//GET Edit celebrity
router.get("/celebrities/:id/edit", (req, res) => {
  Celebrity.findById(req.params.id)
  .then(celebrity => res.render("celebrities/edit", celebrity))
  .catch(err => console.log(err)) 
})

// POST Edit celebrity
router.post("/celebrities/:id", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  const update = { name, occupation, catchPhrase };
  Celebrity.findByIdAndUpdate(req.params.id, update)
  .then(celebrity => 
    {console.log("modificacion exitosa");
    res.render("celebrities/cb_details", celebrity)})
})

// GET Show one celebrity
router.get("/celebrities/:id", (req, res) => {
  Celebrity.findById(req.params.id)
    .then(celebrity =>{ 
      res.render("celebrities/cb_details", celebrity)})
    .catch(err => console.log(err));
});

// POST DELETE CELEBRITY
router.post("/celebrities/:id/delete", (req, res) => {
  Celebrity.findByIdAndRemove(req.params.id)
  .then(() => res.redirect("/celebrities"))
  .catch(err => console.log(err))
})


module.exports = router;
