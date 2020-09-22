const express = require("express");
const router = express.Router();
const celebritiesModel = require("../models/celebrities.model");

/* GET home page */
router.get("/celebrities", async (req, res) => {
  try {
    const dbResult = await celebritiesModel.find();
    console.log(dbResult);
    res.render("celebrities/index", { celebrities: dbResult });
  } catch (error) {
    console.log(error);
  }
});

router.get("/celebrities/:id", async (req, res) => {
  celebritiesModel
    .findById(req.params.id)
    .then((dbRes) => {
      res.render("celebrities/show", { celebrities: dbRes });
    })
    .catch(next);
});

module.exports = router;
