// routes for celebrities.js
const express = require("express");
const celebritiesRouter = express.Router();
const Celebrity = require("../models/celebrity");


// Create the /celebrities/:id/ edit GET route in routes / celebrities.js.
//GET /
celebritiesRouter.get("/:id/edit", (req, res) => {
  console.log(req.params.id)  
  const { id } = req.query;
  Celebrity.findOne({ id: id })
    .then(oneCelebrity => {
      const data = {
        celebrity: oneCelebrity
      };

      res.render("/celebrities/edit", data);
    })
    .catch(err => console.log(err));
});



// POST     edit celebrities
celebritiesRouter.post("/:id/edit", (req, res) => {
  const id = req.query.id;
  const { name, occupation, catchPhrase} = req.body;

 Celebrity.updateOne({ id }, { name, occupation, catchPhrase })
   .then(data => {
      console.log(data)
      res.redirect("/celebrities");
    })
    .catch(err => console.log(err));
});


// POST     /celebrities/:id/delete
celebritiesRouter.post("/:id/delete", (req, res) => {
  console.log(req.params.id);
  Celebrity.findByIdAndRemove(req.params.id)
    .then(() => res.redirect("/celebrities"))
    .catch(err => console.log(err));
});


// GET   /celebrities/new.hbs
celebritiesRouter.get("/new", (req, res) => {
  res.render("celebrities/new")
});


// POST     /celebrities/new
celebritiesRouter.post("/new", (req, res) => {
  const {
    name,
    occupation,
    catchPhrase
  } = req.body;

  Celebrity.create({
      name,
      occupation,
      catchPhrase
    })
    .then(celebrity => {
      console.log(celebrity)
      res.redirect("/celebrities"); //=> where to redirect
    })
    .catch(err => console.log(err));
});


// Create the / celebrities /: id GET route in routes / celebrities.js.
//GET   /celebrities/:id 

celebritiesRouter.get("/:id", (req, res) => {
  Celebrity.findById(req.params.id)
    .then(oneCelebrity => {
      const data = {
        celebrity: oneCelebrity
      };

      res.render("celebrities/show", data)
    })
    .catch(err => console.log(err));
});


//GET /celebrities
celebritiesRouter.get("/", (req, res, next) => {
  Celebrity.find()
    .then(allCelebrities => {
      const data = {
        celebrities: {
          ...allCelebrities
        }
      };

      res.render("celebrities/index", data);
    })
    .catch(err => console.log(err));
});




module.exports = celebritiesRouter;