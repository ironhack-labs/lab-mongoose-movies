const express = require('express');
const router  = express.Router();
const celebModel=require("./../models/celeb-model");

/* GET celebs page */
router.get('/', (req, res, next) => {
  celebModel
  .find()
  .then(celebs => {
    console.log(celebs)
    res.render('celebrities/index', {celebs});
  })
  .catch(dbErr => {
    console.log("OH NO ! Database error", dbErr);
  });
});

//read one
router.get('/show/:id', (req, res, next) => {
  celebModel
  .findById(req.params.id)
  .then(celeb => {
    console.log(celeb)
    res.render('celebrities/show', {celeb});
  })
  .catch(dbErr => {
    console.log("OH NO ! Database error", dbErr);
  });
});

//create

router.get("/new", (req, res) => {
  res.render("celebrities/new");
});

router.post("/", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  // if some tests must be performed, do so before database query
  celebModel
    .create({
        name,
        occupation,
        catchPhrase
    })
    .then(dbRes => res.redirect("/celebrities"))
    .catch(dbErr => {
      console.log(dbErr);
      res.send("OH NO, an error occured while creating new celeb !");
    });
});

//kill
router.post("/show/:id/delete", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  // if some tests must be performed, do so before database query
  celebModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => res.redirect("/celebrities"))
    .catch(dbErr => {
      console.log(dbErr);
      res.send("OH NO, an error occured while deleting new celeb !");
    });
});

//update

router.get("/show/:id/edit", (req, res) => {
  console.log("aaaaaaaaaaaaaaaaaaaalllllllllllllllllllloooooooooooooooooo")
  console.log("get update", req, res)
  celebModel
    .findById(req.params.id)
    .then(celeb => {
      res.render("celebrities/update", {celeb});
    })
    .catch(dbErr => console.error(dbErr));
});

router.post("/show/:id", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  // if some tests must be performed, do so before database query
  celebModel
    .findByIdAndUpdate(req.params.id, { name, occupation, catchPhrase })
    .then(dbRes => res.redirect("/celebrities"))
    .catch(dbErr => {
      console.log(dbErr);
      res.send("OH NO, an error occured while updating new celeb !");
    });
});



module.exports = router;


