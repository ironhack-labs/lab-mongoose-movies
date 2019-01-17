const Celebrity = require('../models/celebrity.model');

module.exports.list = (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => res.render('celebrities/index', { celebrities }))
    .catch(err => next(err))
    console.log("Funciona el listado de Celebrities")
}

module.exports.create = (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => res.render('celebrities/form', { celebrity: new Celebrity() }));
}

module.exports.doCreate = (req, res, next) => {
  const celebrity = new Celebrity(req.body); 

  celebrity.save()
    .then((celebrity) => { res.redirect('/celebrities' )});
}

module.exports.edit = (req, res, next) => {
    Celebrity.findById(req.params.id)

  .then((celebrity) => {

    res.render('celebrities/form', { celebrity })
  })
}


module.exports.doEdit = (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((celebrity) => {
      celebrity.set(req.body);

      celebrity.save()
        .then((celebrity) => { res.redirect('/celebrities' )});
        console.log("Funciona el doEdit")
    })
}

module.exports.get = (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => res.render('celebrities/detail', { celebrity }));
    console.log("Funciona el get de Celebrities")
}

module.exports.delete = (req, res, next) => {
  Celebrity.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/celebrities'));
}



