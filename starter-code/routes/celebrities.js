const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

router.get("/", (req, res) => {
  Celebrity.find()
    .then(celebrities => {
      console.log(celebrities);

      const data = {
        title: "Celebrities",
        celebrities: celebrities
      };
      res.render("celebrities/index", data);
    })
    .catch(err => console.log(err));
});

router.get('/:id', (req,res) => {

  celebrityId = req.params.id;

  Celebrity.findById(celebrityId)
    .then( celebrity => {

      const data = {
        title: celebrity.name,
        celebrity: celebrity
      };
      res.render('celebrities/show', data)
    })
    .catch(err => console.log(err));
})

module.exports = router;
