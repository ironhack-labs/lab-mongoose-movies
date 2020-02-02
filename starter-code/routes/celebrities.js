/*jshint esversion: 6 */

const express = require("express");
const router = express.Router();
const withDbConnection = require("./../withDbConnection");
const Celebrity = require("./../models/Celebrity");

/* GET celebrities */
router.get("/", (req, res, next) => {
  withDbConnection(async () => {
    try {
      const celebrities = await Celebrity.find();
      res.render("celebrities/index", { celebrities });
    } catch (error) {
      next(error);
    }
  });
});

/* GET new */
router.get("/new", (req, res, next) => {
  withDbConnection(async () => {
    try {
      res.render("celebrities/new");
    } catch (error) {
      next(error);
    }
  });
});

/* GET edit */
router.get("/:id/edit", (req, res, next) => {
  withDbConnection(async () => {
    const celebId = req.params.id;
    try {
      const celeb = await Celebrity.findById(celebId);
      res.render("celebrities/edit", { celeb });
    } catch (error) {
      next(error);
    }
  });
});

/* POST new */
router.post("/", (req, res, next) => {
  const celebrityData = {
    name: req.body.name,
    occupation: req.body.name,
    catchPhrase: req.body.catchPhrase
  };

  const newCelebrity = new Celebrity(celebrityData);

  withDbConnection(async () => {
    try {
      await newCelebrity.save();
      res.redirect("/celebrities");
    } catch (error) {
      next(error);
      res.render("celebrities/new");
    }
  });
});

/* POST delete id */
router.post("/:id/delete", (req, res, next) => {
  const celebId = req.params.id;

  withDbConnection(async () => {
    try {
      await Celebrity.findByIdAndRemove(celebId);
      res.redirect("/celebrities");
    } catch (error) {
      next(error);
      res.render("celebrities/new");
    }
  });
});

/* GET celebrity */
router.get("/:id", (req, res, next) => {
  withDbConnection(async () => {
    const celebId = req.params.id;
    try {
      const celeb = await Celebrity.findById(celebId);
      res.render("celebrities/show", { celeb });
    } catch (error) {
      next(error);
    }
  });
});

/* POST edit */
router.post("/:id", (req, res, next) => {
  const celebrityData = {
    name: req.body.name,
    occupation: req.body.name,
    catchPhrase: req.body.catchPhrase
  };

  const celebId = req.params.id;
  withDbConnection(async () => {
    try {
      await Celebrity.findByIdAndUpdate(celebId, celebrityData);
      res.redirect("/celebrities");
    } catch (error) {
      next(error);
      res.render("celebrities/new");
    }
  });
});

module.exports = router;
