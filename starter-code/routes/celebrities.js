
const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity.model");



router.get("/index", (req, res) => {
  
  Celebrity.find({}) 
      .then((celebrities) => {
          
        
          res.render("celebrities/index", { celebrities } );
    })
    .catch((error) => console.error(error));
});


router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});


router.post("/new", (req, res, next) => {
    console.log(req.body)
    const { name, occupation, catchPhrase } = req.body;
    
   Celebrity.create({ name, occupation, catchPhrase })
      .then(() => {
        res.redirect("index");
      })
      .catch((error) => {
        res.render("celebrities/new", { error });
      });
})

router.post("/:id/delete", (req, res, next) => {
    const { id } = req.params;
    Celebrity.findByIdAndRemove(id)
        .then(() => {
        res.redirect("/celebrities/index");
        })
        .catch((error) => {
            next(error)
    })
});



router.get("/:id/edit", (req, res) => {
    const { id } = req.params;
    Celebrity.findById(id)
        .then((celebrity) => {
            res.render("celebrities/edit", {celebrity})
        })
        .catch((error) => {
        next(error)
    })
})



router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  Celebrity.findOne({ _id: id })
    .then((celebrity) => {
      console.log(`This is their info ${celebrity}`);
      res.render("celebrities/show", { celebrity });
    })
    .catch((error) => next(error));
});

router.post("/:id", (req, res, next) => {
  const { id } = req.params;
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.findOneAndUpdate({ _id: id }, { name, occupation, catchPhrase })
    .then(() => {
      res.redirect("/celebrities/index");
    })
    .catch((error) => next(error));
});

module.exports = router;