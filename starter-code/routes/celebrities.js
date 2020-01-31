const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");


//show all db
router.get("/", async (req, res,next) => {
  try{
    const celebrities = await Celebrity.find();
    res.render("celebrities/index", { celebrities });
  } catch (err){
    console.error(err);
    next();
  }

});

//show details of a celebrity
router.get("/:id", async (req, res, next) => {
  try{
    const { id } = req.params;
    const details = await Celebrity.findById(id);
    console.log(details);
    res.render("celebrities/show", { details });
  }catch (err){
    console.error(err);
    next();
  }
})

module.exports = router;
