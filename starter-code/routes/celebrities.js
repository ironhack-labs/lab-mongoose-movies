const express = require('express');
const router = express.Router();
const Celebrity = require("../models/celebrity");
/* Get the Celebrities */
router.get("/", async (req, res) => {
  const celebrity = await Celebrity.find();
  res.render("celebrities/index", { celebrity });
});

router.get("/show/:id", async (req, res) => {
      const { id } = req.params;
    const foundObject = await Celebrity.findById(id);
   return res.render("celebrities/show", { foundObject }); 

});

module.exports = router;
