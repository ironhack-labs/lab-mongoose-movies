const express = require("express");
const router = express.Router();
const withDbConnection = require("./../withDbConnection");
const Celebrity = require("./../models/celebrity");

//list the celebrities
router.get("/", (req, res, next) => {
  withDbConnection(async () => {
    try {
      const celebrities = await Celebrity.find();

      let celebritiesN;
      if (celebrities.length > 1)
        celebritiesN = `There are ${celebrities.length} celebrities`;
      else if (celebrities.length === 1) celebritiesN = `There is 1 celebrity`;
      else celebritiesN = `There are no celebrities`;

      res.render("celebrities/index", {
        celebrities,
        celebritiesN,
        navCelebrities: true
      });
    } catch (error) {
      next();
      return error;
    }
  });
});

//celebrity details
router.get("/:id", (req, res, next) => {
  withDbConnection(async () => {
    try {
      const celebrity = await Celebrity.findById(req.params.id);
      res.render("celebrities/show", { celebrity, navCelebrities: true });
    } catch (error) {
      next();
      return error;
    }
  });
});

//add new celebrity
router.get("/new", (req, res, next) =>
  res.render("celebrities/new", { navCelebrities: true })
);
router.post("/", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
  withDbConnection(async () => {
    try {
      await newCelebrity.save();
      res.redirect("/celebrities");
    } catch (error) {
      console.log(error);
      res.render("celebrities/new", { navCelebrities: true });
    }
  });
});

//delete celebrity
router.post("/:id/delete", (req, res, next) => {
  withDbConnection(async () => {
    try {
      const celebrity = await Celebrity.findById(req.params.id);
      await Celebrity.deleteOne(celebrity);
      res.redirect("/celebrities");
    } catch (error) {
      next();
      return error;
    }
  });
});

//update celebrity
router.get("/:id/edit", (req, res, next) => {
  withDbConnection(async () => {
    try {
      const celebrity = await Celebrity.findOne({
        _id: { $eq: req.params.id }
      });
      console.log(celebrity);
      res.render("celebrities/edit", { celebrity, navCelebrities: true });
    } catch (error) {
      next();
      return error;
    }
  });
});
router.post("/:id", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  withDbConnection(async () => {
    try {
      await Celebrity.findByIdAndUpdate(req.params.id, {
        name,
        occupation,
        catchPhrase
      });
      res.redirect("/celebrities");
    } catch (error) {
      next();
      return error;
    }
  });
});

module.exports = router;
