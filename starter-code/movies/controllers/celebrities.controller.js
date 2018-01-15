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
  // res.send("asasdasdasdas");
  
  
  const celebrityData = req.body;

  const newCelebrity = new Celebrity(celebrityData);

  newCelebrity.save().then(() => {
    res.redirect('/celebrities');
  })
};