const express = require("express");
const Celebrity = require("../models/Celebrity");
const router = express.Router();

/* GET home page */
router
  .get("/", (req, res, next) => res.render("index"))
  .get("/celebrities", async (req, res, next) => {
    try {
      const celebrity = await Celebrity.find();
      res.render("celebrities/index", { celebrity });
    } catch (error) {
      next(error);
    }
  })

  .get("/celebrities/new", async (req, res, next) => {
    try {
      const celebrity = await Celebrity.find();
      res.render("celebrities/new", celebrity);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })

  .get("/celebrities/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const celebrities1 = await Celebrity.findById(id);
      res.render("celebrities/show", celebrities1);
    } catch (error) { 
      console.log(error);
      next(error);
    }
  })
  .post("/celebrities", async (req, res, next) => {
    try {
      const celb = await Celebrity.create(req.body);
      console.log("mirame", celb)
      const newCelebrity = await Celebrity.find();
      res.render("celebrities/show", celb);
    } catch (error) {
      console.log(error);
      
    }
  })

  .post("/celebrities/:id/delete", async (req, res, next) => {
    try {
      const { id } = req.params;
      console.log("del",id);
      const removedCelebrity= await Celebrity.findByIdAndRemove(id);
      console.log("removed cele", removedCelebrity);
      res.redirect("/celebrities");
    } catch (err) {
      console.error(err);
    }
  })

 
  
  


module.exports = router;
