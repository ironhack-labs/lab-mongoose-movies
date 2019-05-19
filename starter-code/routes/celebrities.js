const express = require(`express`);
const router = express.Router();

const Celebrity = require("../models/Celebrity");

router.get("/add", (req, res) => res.render("celebrity-add"));
router.post("/add", async (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
  newCelebrity
    .save()
    .then(theCelebrity => res.redirect("/celebrities")) //does not add it ro mongodb compass even after re
    .catch(error => console.log(error));
});
router.get("/", (req, res, next) => {
  Celebrity.find()
    .then(allCelebrities => {
      res.render("celebrity-index", { celebrity: allCelebrities });
    })
    .catch(error => console.log(error));
});

router.get("/edit/:celebrity_id", (req, res) => {
  Celebrity.findById(req.params.celebrity_id)
    .then(editCelebrity =>
      res.render("celebrity-edit", { dato: editCelebrity })
    )
    .catch(error => console.log(error));
});

router.post("/edit/:celebrity_id", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.update(
    { _id: req.params.celebrity_id },
    { $set: { name, occupation, catchPhrase } }
  )
    .then(celeb => res.redirect("/celebrities"))
    .catch(error => console.log(error));
});

router.post("/delete/:celebrity_id", (req, res, next) => {
  const id = req.params.celebrity_id;
  console.log("entra");
  Celebrity.findByIdAndDelete(id)
    .then(deleteCelebrity => res.redirect("/celebrities"))
    .catch(error => console.log(error));
});

router.get("/:celebrity_id", (req, res) => {
  Celebrity.findById(req.params.celebrity_id)
    .then(theCelebrity =>
      res.render("celebrity-detail", { algo: theCelebrity })
    )
    .catch(error => console.log(error));
});

module.exports = router;
