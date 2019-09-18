const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");
const seed = require("../bin/seeds");

router.get("/", (req, res, next) => {
  res.render("celebritiesHome", {});
  console.log("all celebrities");
});

router.get("/seed", (req, res, next) => {
  Celebrity.create(seed)
    .then(result => {
      console.log("celebrity created", result);

      res.send("index", { renderTime: result });
    })
    .catch(err => next(err));
});

router.get("/celebRoutes", (req, res, next) => {
  Celebrity.find()
    .then(result => {
      console.log(result);
      res.render("celebrities/celebritiesHome", { showAllCelebs: result });
    })
    .catch(err => next(err));
});

// create new celebrity

router.get("/celebRoutes/new", (req, res, next) => {
  console.log("this is the new celebs route");
  Celebrity.find()
    .then(result => {
      // console.log("this is the result");

      res.render("celebrities/newCeleb/new", { newCelebrity: result });
    })
    .catch(err => next(err));
});

// post request that creates new celeb

router.post("/celebRoutes/create", (req, res, next) => {
  console.log(req.body);
  console.log("this is the new celebs route");

  let name = req.body.theName;
  let occupation = req.body.theOccupation;
  let catchPhrase = req.body.theCatchPhrase;

  Celebrity.create({
    name: name,
    occupation: occupation,
    catchPhrase: catchPhrase
  })

    // Celebrity.find()
    .then(result => {
      // console.log(result)
      console.log("this is the result");
      console.log(result);
      res.redirect("/celebRoutes");
    })
    .catch(err => next(err));
});

// gets celeb details (don't touch)
router.get("/celebRoutes/details/:id", (req, res, next) => {
  let id = req.params.id;
  console.log(id);
  Celebrity.findById(id)
    .then(result => {
      console.log(result);

      res.render("celebrities/details", { showDetails: result });
    })
    .catch(err => next(err));
});

// delete celeb
router.post("/celebRoutes/delete/:id", (req, res, next) => {
  let id = req.params.id;

  Celebrity.findByIdAndRemove(id)
    .then(result => {
      res.redirect("/celebRoutes", { deletedCeleb: result });
    })
    .catch(err => {
      next(err);
    });
});

// edit celeb

router.get("/celebRoutes/edit/:id", (req, res, next) => {
  let id = req.params.id;
  // console.log(id);
  Celebrity.findById(id)
    .then(result => {
      res.render("celebrities/edit", {updatedCeleb: result});
    })
    .catch((err) => {
      next(err)
  })
})
 


router.post("/celebRoutes/update/:id", (req,res,next)=>{

  let id = req.params.id;
  console.log(id)
  console.log(req.body)
  
  
  let name = req.body.theName;
  let occupation = req.body.theOccupation;
  let catchPhrase = req.body.theCatchPhrase;

  Celebrity.findByIdAndUpdate(id, 
    {
      name: name,
      occupation: occupation,
      catchPhrase: catchPhrase
    })
  .then(result => {
    res.redirect("/celebRoutes")
  })
  .catch((err) => {
    next(err)
})
})

module.exports = router;
