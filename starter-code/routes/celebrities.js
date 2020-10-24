const express = require("express");
const router = express.Router();

const celebrityModel = require("../models/celebrity");

router.get("/celebrities", (req, res, next) => {
  celebrityModel
    .find()
    .then()
    .catch((err) => {
      next;
    });
});

module.exports = router;
