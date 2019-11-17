const express = require("express");
const router = express.Router();
const Celebrity = require("../Models/Celebrity");
const bodyParser = require("body-parser");

// router.get('/celebrities', (req, res, next) => {
//   res.render('celebrities/index');
// });
router.get("/", (req, res, next) => {
  res.render("index");
});
router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

//----FIND----
router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(celebrityDB => {
      //console.log(celebrityDB);
      res.render("celebrities/index", { celebrityDB });
    })
    .catch(error => {
      next();
      console.log(error);
    });
});

//----SHOW DETAILS----
router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(oneCelebrity => {
      console.log(oneCelebrity);
      res.render("celebrities/show", oneCelebrity);
    })
    .catch(error => {
      next();
      console.log(error);
    });
});

//----CREATE----
router.post("/celebrities", (req, res, next) => {
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(error => {
      next();
      res.redirect("/celebrities/new");
      console.log(error);
    });
});

//----DELETE----
router.post("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(error => {
      next();
      console.log(error);
    });
});

//----UPDATE----
router.get("/celebrities/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(updateCelebrity => {
      res.render("celebrities/edit", updateCelebrity);
    })
    .catch(error => {
      next();
      console.log(error);
    });
});

router.post("/celebrities/:id", (req, res, next) => {
  Celebrity.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(error => {
      next();
      console.log(error)
    });
});

module.exports = router;
