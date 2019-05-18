const express = require("express");
const router = express.Router();


const Celebrity = require("../models/Celebrity")

router.get("/list", (req, res, next) => {
  Celebrity.find() 
    .then(allcel => res.render("celeb-list", { celebrity: allcel }))
    .catch(error => console.log(error));
});

router.get("/view/:celebrity_id", (req, res) => {
  Celebrity.findById(req.params.celebrity_id)
    .then(theCele => res.render("cele-detail", { celebrity: theCele }))
    .catch(error => console.log("buenos dias", error));
});

router.get("/add", (req, res) => res.render("celeb-add"));
router.post("/add", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCele = new Celebrity({ name, occupation, catchPhrase });
  newCele.save()
    .then(theCele => res.redirect("/celebrity/list"))
    .catch(error => console.log(error));
});



router.post("/delete/:celebrity_id", (req, res, next) => {
  const id = req.params.celebrity_id
  Celebrity.findByIdAndDelete({ _id: id })
    .then(cele => res.redirect("/"))
    .catch(error => console.log(error));
})


router.get("/edit", (req, res) => {
  Celebrity.findOne({ _id: req.query.celebrity_id })
    .then(celebrity => res.render("celeb-edit", { celebrity }))
    .catch(error => console.log(error));
});

router.post("/edit", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.update(
    { _id: req.query.celebrity_id },
    { $set: { name, occupation, catchPhrase } }
  )
    .then(celeb => res.redirect("/celebrity/list"))
    .catch(error => console.log(error));
});














module.exports = router;