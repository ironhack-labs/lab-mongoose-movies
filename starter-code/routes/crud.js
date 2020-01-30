const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

// CRUD -> (R) Retrieve
router.get("/", async (req, res) => {
  const celebrity = await Celebrity.find();
  res.render("crud/list", { celebrity });
});

// CRUD -> (C) Create: Show form
router.get("/create", (req, res, next) => {
  res.render("crud/createForm");
});

// CRUD -> (C) Create: Submit & Process form data
router.post("/create", async (req, res, next) => {
  console.log(req.body);
  const { name, occupation, catchPhrase } = req.body;
  const obj = await Celebrity.create({
    name,
    occupation,
    catchPhrase
  });
  console.log(obj, "added to database");
  res.redirect("/");
});

// CRUD -> (D) Delete the object in database with query params
/*router.get("/delete", async (req, res) => {
    const id = req.query.id;
    await FraseTa.findByIdAndRemove(id);
    res.redirect("/frases");
    });*/

/*
// CRUD -> (D) Delete the object in database with route params
router.get("/delete/:id", async (req, res) => {
  const { id } = req.params;
  await FraseTa.findByIdAndRemove(id);
  res.redirect("/frases");
});

// CRUD -> (U) Update/Edit the object in db
router.get("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const obj = await FraseTa.findById(id);
  res.render("crud/createForm", { obj, isUpdate: true });
});

router.post("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const { taName, taFrase, taMola } = req.body;
  await FraseTa.findByIdAndUpdate(id, {
    taName,
    taFrase,
    taMola: taMola ? true : false
  });
  res.redirect("/frases");
});
*/
module.exports = router;
