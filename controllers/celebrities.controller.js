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

module.exports.details = (req, res, next) => {
  const id = req.params.id;

  Celebrity.findById(id)
    .then(celebrity => {
      if (celebrity) {
        res.render('celebrities/show', {
          celebrity,
        });
      } else {
        next(createError(404, `Celebrity with id ${id} not found`));
      }
  })
  .catch(error => {
      next(error);
    });
}

module.exports.create = (req, res, next) => {
  res.render('celebrities/new', {
    celebrity: new Celebrity()
  });
}

module.exports.doCreate = (req, res, next) => {
  const celebrity = new Celebrity(req.body);

  celebrity.save()
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.render('celebrities/new', { 
          celebrity: celebrity,
          errors: error.errors
        });
      } else {
        next(error);
      }
    });
}