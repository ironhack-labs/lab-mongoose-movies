const express = require("express");
const router = new express.Router();
const celebrityModel = require("./../Models/Celebrity")

// CREATE
router.get('/new', (req, res) => {
  res.render('celebrities/new');
})


router.post("/new", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  // if some tests must be performed, do so before database query
  celebrityModel
    .create({
      name, 
      occupation, 
      catchPhrase
    })
    .then(dbRes => res.redirect("/celebrities/all"))
    .catch(dbErr => {
      console.log(dbErr);
      res.send("OH NO, an error occured while creating new artist !");
    });
});



// READ
router.get("/all", (req, res) => {
    celebrityModel
      .find() // retrieve all the documents in the celebrities collection
      .then(celebrities => {
        console.log("coucou nous avons reçu une réponse")
        res.render("celebrities", 
        {
          celebrities
        });
      })
      .catch(dbErr => {
        console.log("OH NO ! Database error", dbErr);
      });
  });

router.get("/:id", (req, res) =>
  celebrityModel
  .findById(req.params.id)
  .then(celebrity => {
    res.render(`celebrities/show`, {celebrity});
  })
  .catch(dbErr => {
    console.error("HOLY SLIP! A DB ERROR HAS OCCURRED", dbErr)
  }))

// UPDATE

router.get("/:id/update", (req, res) => {
  celebrityModel.findById(req.params.id)
  .then(dbRes => {
    res.render("celebrities/update", {celebrity : dbRes} )
  })
  .catch(dbErr => {
    console.error(dbErr)
  });
});

router.post("/:id/update", (req,res) => {
  const {name, catchPhrase, occupation} = req.body;
  celebrityModel.findByIdAndUpdate(req.params.id, {name: name, occupation: occupation, catchPhrase: catchPhrase})
  .then(updatedCeleb => {
    res.redirect("/celebrities")
  })
  .catch(dbErr => {
    console.error(dbErr)
  })
})

// DELETE

router.post("/:id/delete", (req, res) => {
celebrityModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => {
      res.redirect("/celebrities/all");
    })
    .catch(dbErr => {
      console.error("cela n'a pas fonctionné, déso", dbErr);
    });
  });

module.exports = router;