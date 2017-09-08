var express = require('express');
var router = express.Router();
const Celebrity = require("../models/celebrity");

/* GET users listing. */
router.get('/', function(req, res, next) {
  Celebrity.find({}, (err, celebs) => {
    if (err) { return next(err); }
    console.log("hola");
    res.render('celebrities/index', {
      title: "These are our celebrities!",
      celebrities: celebs
    });
  });
});

module.exports = router;
