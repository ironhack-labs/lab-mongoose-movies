const express = require('express');
const router  = express.Router();
const Celebrities = require("../models/celebrity");

const getActors = async (req, res) => {
  try {
    const actors = await Celebrities.find();
    console.log(actors)
    res.render("celebrities/index.hbs", { actors });
  } catch (err) {
    res.send(err);
  }
};
const getActor = async (req, res) => {
  try {
    const { actorId } = req.params;
    const actor = await Celebrities.findById(actorId);
    console.log(actor);
    res.render("celebrities/show.hbs", actor);
  } catch (err) {
    console.log(err);
  }
};
const addNew = async (req, res) => {
  try {
    await Celebrities.create(req.body);
    const newCel = await Celebrities.find();
    res.render("celebrities/new.hbs", { newCel });
  } catch (err) {
    console.log(err);
  }
};

const showform = (req,res) =>{
  res.render("celebrities/new")
}

const deleteOne = async (req, res) => {
  try {
    const { actorId } = req.params;
    const removedOne = await Celebrities.findByIdAndRemove(actorId);
    console.log("removed famous", removedOne);
    res.redirect("/celebrities");
  } catch (err) {
    console.error(err);
  }
};

router.get('/celebrities', getActors)
.get('/show/:actorId', getActor)
.get('/new', showform)
.post('/celebrities', addNew)
.post('/celebrities/:actorId/delete', deleteOne)

module.exports = router;