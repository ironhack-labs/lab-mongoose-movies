const express = require('express');
const router = express.Router();
const Celebrity = require("../models/celebrity")


//-----------GET CELEBRITY INDEX----------------
router.get("/", (req, res) => {
  Celebrity.find()
    .then(celebrity => res.render("celebrities/index", {
      celebrity
    }))
    .catch(err => console.log(err));
});

//-----------CELEBRITY ADD ----------------

router.get("/new", (req, res, next) => {
  res.render("celebrities/new",)
});

router.post("/", (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  const celebrity = new Celebrity({ name, occupation, catchPhrase });

  celebrity.save()
    .then(() => res.redirect("/celebrities"))
    .catch(err => console.log(err));
});

//-----------GET CELEBRITY DETAIL----------------
router.get("/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => res.render("celebrities/show", { celebrity }))
    .catch(err => console.log(err))
});

 //-----------CELEBRITY UPDATE ----------------

router.get("/:id/edit", (req, res) => {
  Celebrity.findById(req.params.id)
  .then(celebrity => { res.render("celebrities/edit", { celebrity });
  });
});

router.post("/:id", (req, res) => {
  const {name, occupation, catchPhrase} = req.body;
  const updates = { name, occupation, catchPhrase };
  Celebrity.findByIdAndUpdate(req.params.id, updates)
  .then(celebrity => 
    {cosole.log("Modificado correctamente");
   res.render("celebrities/show", { celebrity });
  });
});




//-----------CELEBRITY DELETE ----------------

router.post('/:id/delete', (req, res, next) => {
  let celebrity = req.params.id;
  Celebrity.findByIdAndRemove(celebrity)
  .then(() => {
    res.redirect('/celebrities')
  })
  .catch(error => {
    next();
  })
 });

module.exports = router;