const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (request, response) => {
  response.render("index");
});

// Iteration 2-6: see celebrities.js
// Iteration 7: see bin/seeds.js
// Iteration 8-12: see movies.js

// has to be included, otherwise app.use() wouldn't recognize this .js
module.exports = router;
