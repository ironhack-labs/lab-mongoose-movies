const express = require("express");
const router = express.Router();

const Celebrity = require("../models/celebrity.model");

// Endpoints
router.get("/", (req, res) => {
  Celebrity.find({}, { name: 1 })
    .then((celebrities) => res.render("index", { celebrities }))
    .catch((err) => console.log("ERROR:", err));
});


module.exports = router;
