const errors = require("http-errors");
const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity.model")

module.exports.list = (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      console.log('Cele', celebrities);
      res.render('celebrities/index', { 
        celebrities
      });
    })
    .catch(error => {
      next(error);
    });
}; 