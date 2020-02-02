const express = require("express");
const router = express.Router();
const celebrityModel = require("../models/Celebrity");

/* GET celebrities' index page */
router.get("/celebrities/index", (req, res) => {
  celebrityModel
    .find()
    .then(celebs => {
      res.render("celebrities/index", { celebs });
    })
    .catch(err => {
      console.log(err);
    });
});

/* GET 'new celebrity' page */
router.get("/celebrities/new", (req, res) => {
  res.render("celebrities/new");
});

/* CREATE a new celebrity */
router.post("/celebrities/new", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  // req.body === request's content
  celebrityModel
    .create({
      name,
      occupation,
      catchPhrase
    })
    .then(dbRes => {
      res.redirect("/celebrities/index");
    })
    .catch(dbErr => {
      console.error("ERROR", dbErr);
      res.send("Oops... an error occured while creating new celebrity");
      res.render('celebrities/new');
    });
});


// BEST PRACTICE : 
// ALL CODE DEPENDING ON IDs SHOULD BE AT THE END OF THE ROUTE

/* GET 'celebrity id' page */
router.get("/celebrities/show/:id", (req, res) => {
    celebrityModel
    .findById(req.params.id)
    .then(celebrity => {
        res.render("celebrities/show", {celebrity});
    })
    .catch(err => {
        console.error("ERROR : ", err);
    });
});

/* DELETING CELEBRITIES */
router.get("/celebrities/show/:id/delete", (req, res) => {
    celebrityModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => {
        res.redirect("/celebrities/index")
    })
    .catch(dbErr => {
        console.error("ERROR", dbErr);
        res.send("Oops... an error occured while deleting a celebrity");
        res.render("celebrities/index");
    })
})

/* EDITING CELEBRITIES */
// GET the editing page
router.get("/celebrities/show/:id/edit", (req, res) => {
    celebrityModel
    .findById(req.params.id)
    .then(dbRes => {
        res.render("celebrities/edit", {celebrity: dbRes});
    })
    .catch(dbErr => {
        console.error("ERROR", dbErr);
        res.send("Oops... an error occured while accessing the edit celebrity page");
        res.render("celebrities/index");
    })
})

// EDIT the celebrity
router.post("/celebrities/show/:id", (req, res) => {
    const {name, occupation, catchPhrase} = req.body;
    celebrityModel
    .findByIdAndUpdate(req.params.id, {
        name, 
        occupation,
        catchPhrase
    })
    .then(dbRes => {
        res.redirect("/celebrities/index");
    })
    .catch(dbErr => {
        console.error("ERROR", dbErr);
        res.send("Oops... an error occured while editing the celebrity");
        res.render("celebrities/index");
    })
})


module.exports = router;