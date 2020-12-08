const express = require("express");
const router = new express.Router();
const CelebrityModel = require("./../models/celebrity");


// GET - /celebrities/  (READ ALL CELEBS)
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

//// GET - /celebrities/:id/edit (UPDATE)
router.get("/:id/edit", async (req, res, next) => {
    try {
      const celebsToUpdate = await CelebrityModel.findById(req.params.id);
      res.render("celebrities/edit", celebsToUpdate ); 
    } catch (err) {
      next(err);
    }
  });

// GET - /celebrities/:id (READ / SHOW DETAILS)
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
    const celebToCreate = { ...req.body };
    console.log
    try {
        await CelebrityModel.create(celebToCreate);
        res.redirect("/celebrities");
      } catch (err) {
        next(err); 
      }
    });

 // POST - /celebrities/:id/delete (DELETE)   
router.post("/:id/delete", async (req, res) => {
    try {
      await CelebrityModel.findByIdAndRemove(req.params.id);
      res.redirect("/celebrities");
    } catch (err) {
      console.error(err);
    }
});



// POST - /celebrities/:id (UPDATE)
router.post("/:id", async (req, res) => {
    const celebInputToUpdate = { ...req.body };
    try {
      const updatedCeleb = await CelebrityModel.findByIdAndUpdate(
        req.params.id,
        celebInputToUpdate,
        { new: true } // true: give me the updated documebnt back (default: false)
      );
      console.log(updatedCeleb);
      res.redirect("/celebrities");
    } catch (err) {
      console.log(err);
    }
  });

module.exports = router;