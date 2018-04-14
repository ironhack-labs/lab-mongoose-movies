const express = require('express');
const router  = express.Router();
const debug = require("../log")(__filename);

const Celebrity = require("../models/Celebrity");

/* GET home page */
router.get('/', (req, res, next) => {
  Celebrity.find().then( celebrities =>{
    //debug(movies)
    res.render('celebrities', {celebrities});
  })
});

/* CRUD -> Create show form */
router.get("/new", (req, res) => {
  res.render("celebrity_new");
});

/* CRUD -> Acquire form params and create the celebrity object in DB */
router.post("/new", (req, res) => {
  const { name, occupation, catch_phrase } = req.body;

  const celebrity = new Celebrity({ name, occupation, catch_phrase });
  celebrity.save().then(celebrity => {
    debug("La SELEBRIDAD");
    debug(celebrity);
    res.redirect("/celebrities");
  });
});


router.get("/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then(celebrity_detail => {
    debug(celebrity_detail)
    res.render("celebrity_detail", { celebrity_detail});
  });
});

/* CRUD -> Udpate, show celebrity update form */
router.get("/:id/edit", (req, res) => {
  Celebrity.findById(req.params.id).then(celebrity => {
    res.render("celebrity_edit", { celebrity });
  });
});

/* CRUD -> Udpate, update the celebrity in DB */
router.post("/:id/edit", (req, res) => {
  const { name, occupation, catch_phrase } = req.body;
  const updates = { name, occupation, catch_phrase };
  Celebrity.findByIdAndUpdate(req.params.id, updates).then(() => {
    res.redirect("/celebrities");
  });
});
/* CRUD -> Delete the celebrity in DB */
router.post("/:id/delete", (req, res) => {
  Celebrity.findByIdAndRemove(req.params.id).then(() => {
    debug("deleted");
    res.redirect("/celebrities");;
  })
  .catch((err)=>{
    debug(err);
  });
});

module.exports = router;
