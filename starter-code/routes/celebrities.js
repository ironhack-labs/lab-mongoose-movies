const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity")

router.get("/", async (req, res) => {
  const celebrities = await Celebrity.find();
  console.log(celebrities)
  res.render("celebrities/index", {
    celebrities
  })
})


router.get("/new", async (req, res, next) => {
  try {
    await res.render("celebrities/new")
  } catch (e) {
    console.log(`Celebrities.js - error rendering new page ${e}`)
  }
})

router.post("/new", async (req, res) => {
  try {
    const {
      name,
      occupation,
      catchPhrase
    } = req.body;
    const obj = await Celebrity.create({
      name,
      occupation,
      catchPhrase
    });
    console.log(obj, "name", name, "oc", occupation, "catch", catchPhrase);
    res.redirect("/celebrities")
  } catch (err) {
    console.log(`Celebrities.js - error creating new celebrity ${err}`)
  }
})

router.get("/:id", async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const obj = await Celebrity.findById(id);
    console.log(obj)
    res.render("celebrities/show", {
      obj
    })
  } catch (err) {
    console.log(`celebrities.js - error finding new celebrity by id ${err}`)
  }
})

router.get("/delete/:id", async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const obj = await Celebrity.findByIdAndRemove(id);
    console.log(obj)
    res.redirect("/celebrities")
  } catch (err) {
    console.log(`celebrities.js - error finding new celebrity by id ${err}`)
  }
})
module.exports = router;
