const Celebrity = require('../models/celebrity.model');

module.exports.index = (req, res, next) => {
  // res.send("celebrity");
  Celebrity.find({}).then((Celebrity) => {
    res.render('celebrities/index', {
      celebrities: Celebrity
    });
  });
};