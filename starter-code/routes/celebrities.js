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

module.exports = router;
