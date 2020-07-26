const express = require("express");
const Celebrity = require("../models/Celebrity");
const { findById } = require("../models/Celebrity");
const router = express.Router();

/* 
1. abans de res vincular l'arxiu a app.js perquè t'agafi la ruta, sinó no funcionarà
2. possem el '/' perquè a l'app.js li em dit que la ruta es diu /celebrities, 
llavors no cal ficar un altre cop el nom de la ruta 
*/

router.get("/", (req, res, next) => {
  Celebrity.find()
    .then((showAllCelebrities) => {
      // console.log('Retrieved celebrities from DB:', showAllCelebrities);
      res.render("celebrities/index", {
        celebrities: showAllCelebrities,
      });
    })
    .catch((error) => {
      console.log("Error while getting the celebrities from the DB: ", error);
      next(error);
    });
});

/*1.get per renderitzar la pàgina on està el formulari
2. post per obtenir les dades del formulari i agregar-los a la base de dades
*/

router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/new", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({
    name,
    occupation,
    catchPhrase,
  });

  newCelebrity
    .save()
    .then((celebrity) => {
      res.redirect("/celebrities");
    })
    .catch((error) => {
      res.render("celebrities/new");
    });
});

//I5- delete
router.post("/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then((celebrity) => {
      res.redirect("/celebrities");
    })
    .catch((error) => next(error));
});

//I6- edit
//GET
router.get("/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((editCelebrity) => {
      res.render("celebrities/edit", { editCelebrity });
    })
    .catch((error) => {
      next(error);
    });
});

//POST
router.post("/:id/edit", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.update(
    { _id: req.params.id },
    { $set: { name, occupation, catchPhrase } },
    { new: true }
  )
    .then((editCelebrity) => {
      res.redirect("/celebrities");
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/:id", (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findById({
    _id: celebrityId,
  })
    .then((theCelebrity) => {
      res.render("celebrities/show", {
        celebrity: theCelebrity,
      });
    })
    .catch((error) => {
      console.log("Error while retrieving celebrity details: ", error);
      next(error);
    });
});

module.exports = router;
