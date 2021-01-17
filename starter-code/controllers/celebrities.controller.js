const createError = require('http-errors');
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model');


module.exports.list = (req, res, next) => {
  console.log("Celebs list")
  Celebrity.find()
    .then(celebrities => res.render('celebrities/index', { celebrities }))
    .catch(next);
};

module.exports.show = (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      if (celebrity) {
        res.render('celebrities/show', { celebrity });
      } else {
        res.redirect('/celebrities');
      }
    })
    .catch(next);
};

module.exports.create = (req, res, next) => {
  res.render('celebrities/new')};



module.exports.doCreate = (req, res, next) => {
    Celebrity.create(req.body)
      .then(celeb => res.redirect(`/celebrities/${celeb.id}`))
      .catch(error => {
        if (error instanceof mongoose.Error.ValidationError) {
          res.render('celebrities/show', { 
            errors: error.errors,
            post: req.body 
          });
        } else {
          next(error);
        }
      });
  };

  module.exports.edit = (req, res, next) => {
    Celebrity.findById(req.params.id)
    .then((celeb) => {
      if (celeb) {
        res.render('celebrities/edit', { celeb });
      } else {
        next(createError(404, 'Celebrity does not exists'));
      }
    }).catch(next);
};
    

    module.exports.doEdit = (req, res, next) => {
      console.log("editant ////////////////////////////////////")
      Celebrity.findByIdAndUpdate(req.params.id, req.body)
        .then(celeb => {
          if (celeb) {
            //            res.render('celebrities/index', { celeb });
            res.redirect('/celebrities');

          } else {
            next(createError(404, 'Celebrity does not exists'));
          }
        }).catch(error => {
          if (error instanceof mongoose.Error.ValidationError) {
            res.render('celebrities/edit', { 
              errors: error.errors,
              celeb: req.body 
            });
          } else {
            next(error);
          }
        });
    };


  module.exports.delete = (req, res, next) => {
    console.log(req.params.id)
    Celebrity.findByIdAndDelete(req.params.id)
    .then(celeb => {
      if (celeb) {
        res.redirect('/celebrities');
      } else {
        next(createError(404, 'Celebrity does not exist'));
      }
    })
    .catch(next);
};