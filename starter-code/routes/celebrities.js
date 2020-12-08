const express = require("express");
const router = new express.Router();
const CelebrityModel = require("./../models/celebrity");


// GET - /celebrities/
router.get("/", async (req, res, next) => {
  try {
    // Call the Celebrity model's find method to retrieve all the celebrities.
    const celebs = await CelebrityModel.find();
    // If there isn't an error, render the celebrities/index view.
    res.render("celebrities/index", { celebs }); 
  } catch (err) {
    next(err);
  }
});

// // GET - /celebrities/new (CREATE)
router.get("/new", async (req, res, next) => {
    try {
      await CelebrityModel.findById(req.params.id); // fetch the celeb to update
      res.render("celebrities/new"); // pass the found celeb to the view
    } catch (err) {
      next(err); 
    }
  });


// GET - /celebrities/:id
router.get("/:id", async (req, res, next) => {
    try {
      
      const celebsid = await CelebrityModel.findById(req.params.id);
      res.render("celebrities/show", celebsid ); 
    } catch (err) {
      next(err);
    }
  });

// // POST - /celebrities (CREATE)
router.post("/new", async (req, res, next) => {
    const celebToUpdate = { ...req.body };
    console.log
    try {
        await CelebrityModel.create(celebToUpdate);
        res.redirect("/celebrities");
      } catch (err) {
        next(err); 
      }
    });
  
  
module.exports = router;