const express = require("express");
const router = express.Router();
const CelebrityModel = require("../models/Celebrity.model")


router.get("/celebrities", async (req, res, next) => {
  try {
    const dbres = await CelebrityModel.find();
    res.render("celebrities/index", { celebrities: dbres })
  } catch(err) {
    next(err)
  }
});

// iteration 4

router.get("/celebrities/create", (req, res, next) => {
    res.render("celebrities/newCelebrities")
  })
  
  router.post("/celebrities/create", async (req, res, next) => {
    try {
      await CelebrityModel.create(req.body);
      console.log(req.body)
      res.redirect("/celebrities")
    } catch(err) {
      next(err)
    }
  })

// iteration 5

router.get("/celebrities/delete/:id", async (req, res, next) => {
  try {await CelebrityModel.findByIdAndRemove(req.params.id)
  res.redirect("/celebrities")
  } catch(err) {
    next(err)
  }
})

// iteration 3

router.get("/celebrities/:id", async (req, res, next) => {
    try{
    const dbres = await CelebrityModel.findById(req.params.id);
    res.render("celebrities/show", { celebrities: dbres })
    }
    catch(err) {
        next(err)
      }
 
  });

  // iteration 6

  router.post("/celebrities/edit/:id", async (req, res, next) => {
    try {
      const updateCelebritie = await CelebrityModel.findByIdAndUpdate(req.params.id, req.body );
      res.redirect("/celebrities")
    } catch(err) {
      next(err)
    }
  })







module.exports = router;