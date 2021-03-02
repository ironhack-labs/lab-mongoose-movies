const express = require('express');
const router  = express.Router();

const CelebrityModel = require("./../model/Celebrity");

/* GET home page */
router.get('/', (req, res, next) => {
console.log("yuka")
  CelebrityModel.find()
    .then((celeberity) => {
   res.render("celebrities/index", { celebrities: celeberity });
    })
    .catch((dbError) => { 
      console.log(dbError);
      next(dbError);
    });

});



router.get("/celebrities/:id", (req, res, next) => {
  console.log(req.params);
 
  CelebrityModel.findById(req.params.id)
    .then((celeberity) => {
      console.log(celeberity);
      res.render("celebrities/show", { eachCeleb: celeberity });
    })
    .catch((error) => {
      next(error);
    });
});



module.exports = router;
