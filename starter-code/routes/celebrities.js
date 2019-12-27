const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

router.get("/", (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render("celebrities/index", { celebrities });
    })
    .catch(error => next(error));
});

//GET BOOK FORM CREATE
router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

//POST BOOK CREATE //assim eu criei mais um dado na db
router.post("/", (req, res) => {
  let { name, occupation, catchPhrase } = req.body;
  Celebrity
    .create({ name, occupation, catchPhrase })
    .then(_ => res.redirect("/celebrities"))
    .catch(error => {
      res.redirect("/new");
      throw new Error(error);
    });
});

router.get("/:id", (req, res, next) => {
  let { id } = req.params;
  Celebrity.findById(id)
    .then(celebrities => {
      res.render("celebrities/show", { celebrities });
    })
    .catch(error => next(error));
});

router.post('/:id/delete', (req, res, next) => {
  let {id} = req.params;
  Celebrity
  .findByIdAndDelete(id)
  .then(_ => res.redirect('/celebrities'))
  .catch(error => next(error));
});

router.get("/:id/edit", (req, res, next) => {
  let { id } = req.params;
  Celebrity
  .findById(id)
  .then(celebrities => {res.render("celebrities/edit", { celebrities });
    })
    .catch(error => next(error));
});

router.post("/:id", (req, res) => { 
  const { id, ...celebrities } = req.body; //com o spread eu pego TUDO MENOS o id
  Book
  .findByIdAndUpdate(id, celebrities)
  .then(_ => res.redirect("/celebrities"))
  .catch(error => next(error));
});

module.exports = router;
