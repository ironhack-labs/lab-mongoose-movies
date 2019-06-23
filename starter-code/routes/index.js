const express = require("express");
const router = express.Router();
const data = require("../bin/seeds");
const Celebrity = require("../models/celebrity");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

function insertFirstData() {
  Celebrity.insertMany(data)
    .then(celebrities => console.log(celebrities, "data has been inserted"))
    .catch(err => console.log(err, "no data inserted"));
}

insertFirstData();
module.exports = router;
