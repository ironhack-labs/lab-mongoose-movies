const errors = require("http-errors");
const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity.model")

module.exports.list = (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render('celebrities/index', { 
        celebrities
      });
    })
    .catch(error => {
      next(error);
    });
}; 