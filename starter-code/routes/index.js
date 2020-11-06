const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


/*
app.get("/", async (req, res) => {
  const artists = await Artist.find()
  res.render("index", { artists })
})
*/

module.exports = router;
