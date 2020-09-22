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

router.get("/celebrities/:id", async (req, res, next) => {
    try{
    const dbres = await CelebrityModel.findById(req.params.id);
    res.render("celebrities/show", { celebrities: dbres })
    }
    catch(err) {
        next(err)
      }
 
  });


router.get("/celebrities/create", (req, res, next) => {

})

router.post("/celebrities/create", (req, res, next) => {

})


router.get("/celebrities/edit/:id", (req, res, next) => {

})

router.post("/celebrities/edit/:id", (req, res, next) => {

})

router.get("/celebrities/delete/:id", (req, res, next) => {

})

module.exports = router;