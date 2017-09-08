var express = require('express');
var router = express.Router();
const Celebrity = require('../models/celebrity');
router.get("/", (req, res, next) => {
  Celebity.find({}, (err, celebitys) => {
    if (err) {
      return next(err);
    }
    res.render("celebrities/index", {
      celebitys: celebitys
    });
  });

});
