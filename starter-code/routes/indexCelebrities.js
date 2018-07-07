const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/celebrity")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/*GET celebrities list*/
router.get('/celebrities', (req, res, next) => {
  Celebrity.find({})
    .then(celebrities => {
      res.render('celebrities/index', {celebrities});
    })
    .catch(error => {
      console.log(error);
      next();     //Esto no lo entiendo muy bien!!!!
    })
});

/*GET new celebrity*/
router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

/*POST new celebrity*/
router.post("/celebrities/add", (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  new Celebrity({name, occupation, catchPhrase})
    .save().then(Celebrity => {
      console.log("Celebrity inserted succesfully!!!");
      res.redirect("/celebrities");
    });
});

/*GET celebrity info*/
router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render("celebrities/show", celebrity); //Por qué celebrities va sin llaves???
    })
    .catch(error => {
      console.log(error);
      next();
    })
});

/*GET celebrity to edit*/
router.get("/celebrities/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render("celebrities/edit", celebrity); //Por qué celebrities va sin llaves???
    })
    .catch(error => {
      console.log(error);
      next();
    })
});

/*POST eidt celebrity*/
router.post("/celebrities/:id/edit", (req, res, next) => {
  console.log(req.body)
  const {name, occupation, catchPhrase} = req.body;
  Celebrity.findByIdAndUpdate(req.params.id, {name, occupation, catchPhrase})
    .then(Celebrity => {
      console.log("Celebrity updated succesfully!!!");
      res.redirect("/celebrities");
    });
});

/*GET remove celebrity*/
router.get("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect("/celebrities"); 
    })
    .catch(error => {
      console.log(error);
      next();
    })
});

module.exports = router;
