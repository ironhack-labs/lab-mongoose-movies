const Celebrity = require('../models/celebrity.model');
const mongoose = require('mongoose');


module.exports.list = (req, res, next) => {
  Celebrity.find()
    .then(celebrities => res.render('celebrities/index', { celebrities }))
    .catch(error => next(error));
}

module.exports.show = (req, res, next) => {
    const id = req.params.id;

    Celebrity.findById(id)     
        .then(celebrity => res.render('celebrities/show', { celebrity }))
        .catch(error => next(error));
}

module.exports.create = (req, res, next) => {
    res.render('celebrities/new', { celebrity: new Celebrity() })
}

module.exports.doCreate = (req, res, next) => {
    const celebrity = new Celebrity(req.body)
  
    celebrity.save()
      .then(() => res.redirect("/celebrities"))
      .catch((error) => {
        if (error instanceof mongoose.Error.ValidationError) {
          res.render('celebrities/new', { celebrity, ...error})
        } else{
          next(error)
        }
      });
}

module.exports.delete = (req, res, next) => {
    const id = req.params.id;
  
    Celebrity.findByIdAndRemove(id)
        .then(() =>  res.redirect('/'))
        .catch(error => next(error))
}


module.exports.edit = (req, res, next) => {
  const id = req.params.id;

  Celebrity.findById(id)     
      .then(celebrities => res.render('/edit', { celebrity, celebrities }))
      .catch(error => next(error));
}

module.exports.doEdit = (req, res, next) => {
  const id = req.params.id;
  
  Celebrity.findByIdAndUpdate(id, req.body, { new: true})
    .then(celebrity => res.redirect(`/celebrities/${celebrity._id}`))
    .catch(error =>  next(error))
}
  