const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

/* GET home page */
router.get("/", (req, res, next) => {
  Celebrity.find()
    .then((celeb) => {
      res.render("celebrities/index", { list: celeb });
    })
    .catch((err) => {
      console.log("Error when get Celebrities list", err);
      next();
    });
});

router.get("/:id", async (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((celeb) => {
      res.render("celebrities/show", celeb);
    })
    .catch((err) => {
      console.log("An error has occurred while charge the celebrity", err);
      next();
    });
});

module.exports = router;
