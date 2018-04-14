const express = require("express");
const router = express.Router();

const Celebrity = require("../models/celebrity");

/* CRUD -> Retrieve ALL */
router.get("/", (req, res) => {
  Celebrity.find().then(celebrities => {
    console.log(celebrities)
    res.render("celebrity_list", { celebrities });
  })
  .catch(error => {
    console.log(error)
  })
  
});
module.exports = router;