const express = require("express");
const router = express.Router();

const Celebrity = require("../models/celebrity");


/* CRUD -> Create show form */
router.get("/new", (req, res) => {
  res.render("celebrity_new");
});

/* CRUD -> Acquire form params and create the book object in DB */
router.post("/new", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;

  const celebrity = new Celebrity({ name, occupation, catchPhrase });
  celebrity.save().then(celebrity => {
    console.log("Nueva celebrity creada");
    console.log(celebrity);
    res.redirect("/celebrity");
  });
});





/* CRUD -> Retrieve ALL */
router.get("/", (req, res) => {
  Celebrity.find().then(celebrities => {
    console.log(celebrities)
    res.render("celebrity_list", { celebrities });
  })
  .catch(error => {
    console.log(error)
  }) 
});

router.get("/:id", (req, res, next) => {
  Celebrity.findById(req.params.id).then(celebrity => {
    console.log(celebrity);
      res.render("show", { celebrity });
    })
    .catch(error => {
      res.render("error")
    })
  });

  /* CRUD -> Delete the book in DB */
router.get("/:id/delete", (req, res) => {
  Celebrity.findByIdAndRemove(req.params.id).then(() => {
    res.redirect("/celebrity");
  })
  .catch(error => {
    res.render("error")
  }); 
});
/* CRUD -> Udpate, show book update form */
router.get("/:id/edit", (req, res) => {
  Celebrity.findById(req.params.id).then(celebrity => {
    res.render("celebrity_edit", { celebrity });
  });
});

/* CRUD -> Udpate, update the book in DB */
router.post("/:id/edit", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  const updates = { name, occupation, catchPhrase };
  Celebrity.findByIdAndUpdate(req.params.id, updates).then(() => {
    res.redirect("/celebrity");
  });
});

  
module.exports = router;