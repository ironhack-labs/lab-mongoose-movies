const Celebrity = require('../models/celebrity.model');


module.exports.list = (req, res, next) => {
  const criteria = {};

  if (req.query.title) {
    criteria.title = new RegExp(req.query.title, 'i');
  }

  Celebrity.find(criteria)
    .sort({ _id: -1 })
    .then(celebrities => res.render('celebrities/index', { 
      celebrities,
      title: req.query.title 
    }))
    .catch(error => next(error));
}

module.exports.details = (req, res, next) => {
    const id = req.params.id;

    Celebrity.findById(id)     
        .then(celebrities => res.render('celebrities/show', { celebrity, celebrities }))
        .catch(error => next(error));
}

module.exports.create = (req, res, next) => {
    res.render('celebrities/new', { celebrity: new Celebrity() })
}

module.exports.doCreate = (req, res, next) => {
    const celebrity = new Celebrity(req.body)
  
    celebrity.save()
      .then(() => res.redirect("/celebrities"))
      .catch(error => next(error)) 
  }

module.exports.delete = (req, res, next) => {
    const id = req.params.id;
  
    Celebrity.findByIdAndRemove(id)
        .then(() =>  res.redirect('/celebrities'))
        .catch(error => next(error))
  }


  module.exports.edit = (req, res, next) => {
    const id = req.params.id;

    Celebrity.findById(id)     
        .then(celebrities => res.render('celebrities/edit', { celebrity, celebrities }))
        .catch(error => next(error));
}

module.exports.doEdit = (req, res, next) => {
    const id = req.params.id;
  
    Celebrity.findByIdAndUpdate(id, req.body, { new: true})
      .then(celebrity => res.redirect(`/celebrities/${celebrity._id}`))
      .catch(error =>  next(error))
}
  