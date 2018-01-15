const Celebrity = require('../models/celebrity.model');

module.exports.index = (req, res, next) => {
  Celebrity.find({}).then((Celebrity) => {
    res.render('celebrities/index', {
      celebrities: Celebrity
    });
  });
};

module.exports.show = (req, res, next) => {
  Celebrity.findById(req.params.id).then((Celebrity) => {
    res.render('celebrities/show', {
      celebrity: Celebrity
    });
  });
};

module.exports.new = (req, res, next) => {  
  res.render('celebrities/form', {
    celebrity: new Celebrity()
  });
};

module.exports.create = (req, res, next) => {
  const celebrityData = req.body;
  const newCelebrity = new Celebrity(celebrityData);
  newCelebrity.save().then(() => {
    res.redirect('/celebrities');
  });
};

module.exports.edit = (req, res, next) => {
  Celebrity.findById(req.params.id).then((celebrity) => {
    res.render('celebrities/form', {
      celebrity: celebrity
    });
  });
};

module.exports.update = (req, res, next) => {
  const celebrityId = req.params.id;
  const updates = {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
  };

  Celebrity.findByIdAndUpdate(celebrityId, updates).then((clebrity) => {
    res.redirect('/celebrities');
  });
};

module.exports.delete = (req, res, next) => {
  const celebrityId = req.params.id;

  Celebrity.findByIdAndRemove(celebrityId).then((product) => {
    return res.redirect('/celebrities');
  });
};