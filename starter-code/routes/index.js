const express = require('express');
const router  = express.Router();

const{
  celebritiesList,
  celebritiesDetail,
  newCelebrities,
  newCelebrityPost,
  deletCelebritie
} = require("../controllers/index.controller");



/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

//routes  
router.get("/celebrities", celebritiesList)
router.get("/celebrities/:id",celebritiesDetail)

router.get("/new",newCelebrities)
router.post("/new", newCelebrityPost);

router.post("/celebrities/:id/delete",deletCelebritie)

module.exports = router;
