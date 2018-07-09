const express = require("express");
const router = express.Router();

const Celebrity = require("../models/celebrities.js");

//Celeb-page//
router.get("/", (req, res, next) => {
  Celebrity.find({}).then(celebrities => {
    res.render("celebrities/index", { title: "Celebrities", celebrities });
  });
});

//Get add celeb page//
router.get("/add", (req, res, next) => {
  res.render("celebrities/add", { title: "Add a celebrity" });
});

/* POST new celeb */
router.post("/", (req, res, next) => {
  const { name, catchPhrase, occupation } = req.body;
  new Celebrity({ name, catchPhrase, occupation }).save().then(() => {
    res.redirect("/celebrities");
  });
});

/* GET delete celeb */
router.get("/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id, () =>
    res.redirect("/celebrities")
  );
});

/* GET edit celeb */
router.get("/:id/update", (req, res, next) => {
  Celebrity.findById(req.params.id).then(celebrity => {
    res.render("celebrities/update", { title: "Edit celebrity", celebrity });
  });
});

/* POST edit celeb */
router.post('/:id/edit', (req, res, next) => {
      const {name, catchPhrase, occupation} = req.body;
      Celebrity.findByIdAndUpdate(req.params.id,{name, catchPhrase, occupation})
          .then( celebrity => {
            res.redirect('/celebrities')
          })
    })
    
    /*GET celebs detail */
    router.get('/:id', (req, res, next) => {
      Celebrity.findById(req.params.id).then(
        celebrity => {
          res.render('celebrities/detail', {title: 'C detail', celebrity})
        })
    })

module.exports = router;
