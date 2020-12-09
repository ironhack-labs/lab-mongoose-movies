const express = require("express");
const celebrityModel = require("../models/celebrity");
const router = new express.Router();

//DISPLAY ALL CELEBRITIES OK
router.get("/celebrities", async (req, res, next) => {
  try {
    const allCelebrities = await celebrityModel.find();
    res.render("celebrities/index", { allCelebrities });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

//SEND TO THE PAGE FORM CREATE
router.get("/celebrities/new", (req, res) => {
  console.log("hello");
  res.render("celebrities/new");
});

//DISPLAY ONE CELEBRITY OK
router.get("/celebrities/:id", async (req, res, next) => {
  try {
    const oneCelebrity = await celebrityModel.findById(req.params.id);
    res.render("celebrities/show", oneCelebrity);
    console.log(oneCelebrity);
  } catch (err) {
    next(err);
  }
});

//FORM CREATE AND SEND BACK TO FULL LIST
router.post("/celebrities", async (req, res, next) => {
  try {
    await celebrityModel.create(req.body);
    res.redirect("/celebrities");
  } catch (err) {
    res.render("celebrities/new");
    next(err); // express will display the error on the provided error page (error.hbs) (check the www file for details ....)
  }
});

//DELETE ONE CELEBRITY OK
router.post("/celebrities/:id/delete", async (req, res, next) => {
  try {
    const deletedCelebrity = await celebrityModel.findByIdAndDelete(
      req.params.id
    );
    res.redirect("/celebrities");
  } catch (err) {
    res.render("celebrities/new");
    next(err); // express will display the error on the provided error page (error.hbs) (check the www file for details ....)
  }
});

// SEND TO THE PAGE EDIT ONE CELEBRITY OK
router.get("/celebrities/:id/edit", async (req, res, next) => {
  try {
    const editCelebrity = await celebrityModel.findById(req.params.id);
    res.render("celebrities/edit", editCelebrity);
  } catch (err) {
    next(err); // express will display the error on the provided error page (error.hbs) (check the www file for details ....)
  }
});

// FORM EDIT ONE CELEBRITY OK

router.post("/celebrities/:id", async (req, res) => {
  try {
    const updatedCelebrity = await celebrityModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // true: give me the updated documebnt back (default: false)
    );
    console.log(updatedCelebrity);
    res.redirect("/celebrities");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
