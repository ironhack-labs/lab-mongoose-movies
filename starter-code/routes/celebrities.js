const express = require("express");
const Celebrity = require("../models/celebrity.js");
const router = express.Router();

/* GET celebrities page */
router.get("/", (req, res, next) => {
  Celebrity.find()
    .then((allTheCelebritiesFromDB) => {
      console.log("DB:", allTheCelebritiesFromDB);
      res.render("celebrities/index", { celebrity: allTheCelebritiesFromDB });
    })
    .catch(next);
});

router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});
router.post("/new", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  console.log(req.body);
  const newCelebrity = new Celebrity({
    name,
    occupation,
    catchPhrase,
  });
/*   if (!newCelebrity) {
    console.log(newCelebrity);
    return res.redirect("/celebrities/new");
  } */
  newCelebrity
    .save()
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/celebrities/new");
    });
});

router.get("/:id", (req, res, next) => {
  let celebrity = req.params.id;
  Celebrity.findOne({ _id: celebrity })
    .then((celebrity) => {
    /*   if (!celebrity) {
        return res.status(404).render("not-found");
      } */
      console.log(celebrity);
      res.render("celebrities/show", { celebrity: celebrity });
    })
    .catch(next);
});
router.post("/:id/delete", (req, res, next) => {
    Celebrity.findByIdAndRemove(req.params.id)
      .then((celebrity) => {
        console.log(celebrity);
        res.redirect("/celebrities");
      })
      .catch(next);
  });
  

router.get("/:id/edit", (req, res, next) => {
    Celebrity.findById(req.params.id)
      .then((celebrity) => {
        console.log(celebrity);
        res.render("celebrities/edit", { celebrity });
      })
      .catch(next);
  });
router.post("/:id/edit", (req, res, next) => {
  const celebrityId = req.params.id;
  const { name, occupation, catchPhrase } = req.body;
  
  Celebrity
   .update(
      {_id: celebrityId},
      {$set: {name, occupation, catchPhrase}}
      )
   .then((celebrity) =>{
       console.log(celebrity);
       res.redirect('/celebrities')
   })
   .catch(next);
});



module.exports = router;
