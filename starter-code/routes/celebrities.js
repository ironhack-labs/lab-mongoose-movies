const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

//show all db celebrities
router.get("/", async (req, res, next) => {
  try {
    const celebrities = await Celebrity.find();
    res.render("celebrities/index", { celebrities });
  } catch (err) {
    console.error(err);
    next();
  }
});

//get for a new celebrity
router.get("/new", async (req, res, next) => {
  return res.render("celebrities/new");
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

router.get("/edit/:id", async (req,res,next) => {
  try{
    const { id } = req.params;
    const obj = await Celebrity.findById(id);
    res.render("celebrities/edit",{obj});
  } catch(err){
    console.log(err);
    next();
  }
})

router.post("/edit/:id", async (req, res,next) => {
  try{
    const { id } = req.params;
    const { name, occupation, catchPhrase } = req.body;
    const obj = await Celebrity.findByIdAndUpdate(id, {
      name,
      occupation,
      catchPhrase
    });
    res.redirect("/celebrities");
  }catch(err){
    console.log(err);
    next();
  }
  
  
});

module.exports = router;
