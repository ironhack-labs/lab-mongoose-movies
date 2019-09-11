const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");
// const path=require('path')
// const bodyParser   = require('body-parser');
// const cookieParser = require('cookie-parser');
// const logger       = require('morgan');
// const path         = require('path');

// router.use('views/celebrities', path.join(__dirname, 'views/celebrities'));

router.get("/", (req, res, next) => {
  Celebrity.find().then(celebrities => {
    console.log(celebrities);
    res.render("celebrities/index", {
      celebrities
    });
  });
});

router.post("/", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({
    name,
    occupation,
    catchPhrase
  })
    .then(celeb => {
      console.log(`Success! ${name} was created in the database!`);
      res.redirect(`/celebrities`);
    })
    .catch(err => {
      console.error(err);
      res.redirect("/new");
    });
  });

  
  router.get("/new", (req, res) => {
    res.render("celebrities/new");
  });


router.get("/:id", (req, res, next) => {
  const celebrityId = req.params.id;

  Celebrity.findById(celebrityId).then(celebrity => {
    console.log(celebrity);

    res.render("celebrities/show", { celebrity });
  });
});

router.get("/:id/edit", (req, res) => {
  const celebId = req.params.id;
  Celebrity.findById(celebId).then(celeb => {
    console.log(celeb);
    res.render("edit", { celeb }).catch(err => {
      next(err);
    });
  });
  res.render("celebrities/edit");
});


router.post("/:id/delete", (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrity.findByIdAndRemove(celebrityId)
    .then(() => {
      console.log("remove one celeb succesfully");
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.error(err);
      next();
    });
});

module.exports = router;
