var express = require("express");
const Celebrity = require("../models/celebrity");
var router = express.Router();

//mostrar
router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then((data) => {
      console.log("The data from the db is", { data });
      res.render("celebrities/index", { data });
    }) 
    .catch((err) =>
      console.log("Error while getting the celebrities from the DB: ", err)
    );
});

//añadir 

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/celebrities", async (req, res, next) => {
  try {
    const { name, occupation, catchPhrase } = req.body; 
    const celebrity = new Celebrity({ name, occupation, catchPhrase }); 
    const newCelebrity = await celebrity.save();
    res.redirect("/celebrities");
  } catch (err) {
    console.log(
      "Error while creating the new celebrity, please, try again",
      err
    );
    res.redirect("/celebrities/new");
  }
});

//editar 

router.get("/celebrities/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((data) => {
      res.render("celebrities/edit", { data })
    })
    .catch((err) =>
          console.log("Error while editing: ", err)
        );
    });
  

router.post("/celebrities/:id", (req, res, next) => {
    const {name, occupation, catchPhrase} = req.body;
    Celebrity.update({_id:req.params.id}, { $set: { name, occupation, catchPhrase }}, { new: true  } )

    .then((data) => {
      res.redirect("/celebrities");
    })
    .catch((error) => {
      console.log(error);
    });
});


//borrar

router.post("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then((data) => {
      console.log("Removed");
    })
    .catch((err) =>
      console.log("Error while getting the celebrities from the DB: ", err)
    );
  res.redirect("/celebrities");
});

//encontrar por id

router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((data) => {
      console.log("The data from the db is", { data });
      res.render("celebrities/show", { data });
    })
    .catch((err) =>
      console.log("Error while getting the celebrities from the DB: ", err)
    );
});

module.exports = router;
