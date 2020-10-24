var express = require("express");
const Celebrity = require("../models/celebrity");
var router = express.Router();



router.get("/", (req, res, next) => {
    Celebrity.find()
    .then(data => {
      console.log('The data from the db is' , {data})
      res.render("celebrities/index", { data })
    }) //aqui no posem punt i coma despres del then perque ha de encadenar amb el catch
    .catch((err) =>
          console.log("Error while getting the celebrities from the DB: ", err));
    });
  

router.get("/new", (req, res, next) => {
    res.render("celebrities/new");
});


router.post("/celebrities/new", async (req, res, next) => {
    try {
      const { name, occupation, catchPhrase } = req.body; //req.body son los valores que traemos del formulario.
      const celebrity = new Celebrity({ name, occupation, catchPhrase }); //a cada nou book li direm "book"
      const newCelebrity = await celebrity.save()
      res.redirect("/celebrities")

      } catch (err) {
      console.log("Error while creating the new celebrity, please, try again", err);
      res.redirect("/celebrities/new")
    }
  });
  

router.post("/:id/delete", (req,res,next) => {
    Celebrity.findByIdAndRemove(req.params.id)
        .then((data) => {
            console.log("Removed")
        })
        .catch((err) =>
        console.log("Error while getting the celebrities from the DB: ", err))       
        res.redirect("/celebrities")
    });
  
   


router.get("/:id", (req, res , next) =>{
    Celebrity.findById(req.params.id)
    .then((data) => {
        console.log('The data from the db is' , {data})
        res.render("celebrities/show", {data})
    })
    .catch((err) =>
        console.log("Error while getting the celebrities from the DB: ", err)
      );
} )


    module.exports = router;
