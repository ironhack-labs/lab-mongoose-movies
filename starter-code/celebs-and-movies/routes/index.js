const express = require('express');
const router  = express.Router();

router.get('/', (req, res, next) => {
  res.render('index');
  //res.send("hola que tal, hola que pasa que tal")
});

module.exports = router;
