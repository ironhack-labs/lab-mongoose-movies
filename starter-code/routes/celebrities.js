const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

//show all db
router.get("/", async (req, res, next) => {
  try {
    const celebrities = await Celebrity.find();
    res.render("celebrities/index", { celebrities });
  } catch (err) {
    console.error(err);
    next();
  }
});

//show details of a celebrity
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const details = await Celebrity.findById(id);
    console.log(details);
    res.render("celebrities/show", { details });
  } catch (err) {
    console.error(err);
    next();
  }
});

//get for a new celebrity
router.get("/new", async (req, res, next) => {
  res.render("celebrities/new");
});
//create a new celebrity
router.post("/", async (req, res, next) => {
  try {
    const { name, occupation, catchPhrase } = req.body;
    const obj = await Celebrity.create({ name, occupation, catchPhrase });
    console.log(`Add new celebrity in db ${obj}`);
    res.redirect("/celebrities");
  } catch (err) {
    console.log(err);
    res.render("celebrities/new");
  }
});

//delete celebrity
router.post("/delete/:id", async (req,res,next) => {
  try{
    const { id } = req.params;
    await Celebrity.findByIdAndRemove(id);
    res.redirect("/celebrities");
  } catch(err){
    console.log(err);
    next();
  }


})



module.exports = router;
