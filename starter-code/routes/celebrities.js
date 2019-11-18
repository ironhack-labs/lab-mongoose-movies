const express = require("express");
const router = express.Router();

const Celebrity = require("./../models/Celebrity");



//GET /Celebrity:id

router.get("/:id", function (req, res, next) {
   
        Celebrity.findById(req.params.id)
      .then(celebrity => {
        res.render('celebrities/show', {
            celebrity
        });
      })
      .catch(err => console.log(err));
    // then render the page with celebrity details
  });
  
 //GET /Celebrity
router.get("/", function (req, res, next) {
    Celebrity.find()
        .then(allCelebritiesFromDB => {
            res.render("celebrities/index", {
                allCelebritiesFromDB
            });
        })
        .catch(err => {
            console.log(err);
        });
});



module.exports = router;