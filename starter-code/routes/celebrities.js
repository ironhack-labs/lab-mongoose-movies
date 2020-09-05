const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

router.get("/", (req, res, next) => {
  Celebrity.find()
    .then((data) => {
      res.render("celebrities/index", { data });
    })
    .catch((err) => {
      next(err);
    });
});
router.get("/view/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((data) => {
      res.render("celebrities/show", data);
    })
    .catch((err) => {
      next(err);
    });
});
router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});
router.post("/", (req, res, next) => {
  console.log(req.body);
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({
    name,
    occupation,
    catchPhrase,
  })
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(() => {
      res.render("celebrities/new");
    });
});
router.get('/view/:id/delete', (req, res, next) => {
    Celebrity.findByIdAndDelete({_id:req.params.id})
        .then(() => {
            res.redirect('/celebrities')
        })
        .catch(err => {
            next(err)
        })
})

module.exports = router;
