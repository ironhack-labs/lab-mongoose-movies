// Attention on doit tout redéfinir ici:
const express = require("express");
const router = express.Router();
const CelebrityModel = require("./../models/celebrity")

/* GET celebrities */
router.get("/", (req, res, next) => {
  console.log("hrere")
  CelebrityModel.find()
  .then(dbResValue => {
    console.log(dbResValue);
    res.render("celebrities/index",  { celebrities: dbResValue })
  })
  .catch(dbErr => {
    next(dbErr);
  });
})

router.get("/new", (req, res, next) => {
  // console.log("hey !!!");
  CelebrityModel.findOne({_id: req.params.id})
  .then(dbResValue => {
    // console.log(dbResValue);
    res.render("celebrities/new",  { celebrities: dbResValue })
  })
  .catch(dbErr => {
    next(dbErr);
  });
});

router.post("/new", (req, res, next) => {
  // console.log("hey !!!");
  CelebrityModel.create(
    { name: req.body.name, // "This" is used when you use Express, so no need to have it here.
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase 
    })
  .then(dbResValue => {
    // console.log(dbResValue);
    res.redirect("/celebrities");
  })
  .catch(dbErr => {
    next(dbErr);
  });
})

router.get("/:id", (req, res, next) => {
  // console.log("hey !!!", req.params.id);
  CelebrityModel.findOne({_id: req.params.id})
  .then(dbResValue => {
    console.log(dbResValue);
    // res.render("../views/celebrities.hbs")
    res.render("celebrities/shows", { celebrity: dbResValue });
  })
  .catch(dbErr => {
    next(dbErr);
  });
})

router.post("/:id/delete", (req, res, next) => {

  // console.log("ici id")
  console.log(req.params._id)
  CelebrityModel.findByIdAndRemove({_id: req.params.id})
  .then(dbResValue => {
    console.log("delete ok", dbResValue);
    res.redirect("/celebrities");
  })
  .catch(dbErr => {
    console.log("tt va mal")
    next(dbErr);
  });
})

module.exports = router;