const express = require('express');
const router  = express.Router();

/* Get the Celebrities */ 

router.get("/", async (req, res, next) => {
  try {
    const celebrity = await Celebrity.find();
    res.render("celebrities/index", { celebrity });
  } catch (err) {
    res.send(`error: ${err}`);
    next();
  }
});

module.exports = router;


