const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

router.get("/celebrities", (req,res,next) =>{
    Celebrity.find({}, (err, allCelebrities)=>{
      if(err) {
          next(err);
          return};
          res.locals.listOfCelebs = allCelebrities;
      res.render("celebrities/index.ejs");
    });
  })

.post("/new", function(req,res){
    const movie = new Pelicula({title:req.body.title});
    movie.save();
    res.send("pelicula guardada");
});

module.exports = router;