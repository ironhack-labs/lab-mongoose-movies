const express = require("express");
const router = new express.Router();
const celebrityModel = require("../models/Celebrity");


router.get("/all-celebrities", (req, res) => {
  celebrityModel
    .find()
    .then(celebrities => {
      res.render("list-celebrities", {
        celebrities
      })
    })
    .catch(dbErr => {
      console.log("OH NO ! Database error", dbErr);
    })
});

router.get("/celebrity/new", (req, res) => {
  res.render("form-Celebrity");
});

router.post("/create-celebrity", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  // if some tests must be performed, do so before database query
  celebrityModel
    .create({
      name,
      occupation,
      catchPhrase
    })
    .then(dbRes => res.redirect("/all-celebrities"))
    .catch(dbErr => {
      console.log(dbErr);
      res.send("OH NO, an error occured while creating new artist !");
    });
});

router.get("/celebrity/:id", (req, res) => {
  // console.log(req.params.id);
  celebrityModel
    .findById(req.params.id)
    .then(celebrity => {
      res.render("page-celebrity", { celebrity });
    })
    .catch(dbErr => console.error("OH no, db err :", dbErr));
});

router.get("/celebrity/update/:id", (req, res) => {
  celebrityModel
    .findById(req.params.id)
    .then(dbRes => {
      res.render("form-celebrity-update", { celebrity: dbRes });
    })
    .catch(dbErr => console.error(dbErr));
});

router.post("/celebrity/update/:id", (req, res) => {
  // console.log(req.params.id); // access vars declared in the route
  // console.log(req.body); // access the posted data
  const { name, occupation, catchPhrase } = req.body;

  celebrityModel.findByIdAndUpdate(req.params.id, {
    name,
    occupation,
    catchPhrase
  })
  .then(dbRes => {
    res.redirect("/all-celebrities");
  })
  .catch(dbErr => {
    console.error(dbErr)
  });
});

router.get("/celebrity/delete/:id", (req, res) => {
  celebrityModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => {
      res.redirect("/all-celebrities");
    })
    .catch(dbErr => {
      console.error(dbErr);
    });
});

// router.get("/celebrity/new", (req, res) => {
//   // console.log(req.params.id);
//   celebrityModel
//     .find()
//     .then(celebrity => {
//       res.render("form-celebrity", { celebrity });
//     })
//     .catch(dbErr => console.error("OH no, db err :", dbErr));
// });

module.exports = router;



