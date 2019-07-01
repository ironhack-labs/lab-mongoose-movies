const Celebrities = require("../models/Celebrity");

exports.findCelebrities = (req, res, next) => {
  Celebrities.find()
    .then(celebrities => {
      res.render("celebrities/index", { celebrities });
    })
    .catch(err => {
      res.render("celebrities/index", { err });
    });
};

exports.findOneCelebrity = (req, res, next) => {
  Celebrities.findById(req.params.id)
    .then(celebrity => {
      res.render("celebrities/show", celebrity);
    })
    .catch(err => {
      res.render("celebrities/show", err);
    });
};

exports.viewCreateCelebrity = (req, res) => {
  res.render("celebrities/new");
};

exports.create = (req, res, next) => {
  Celebrities.create({ ...req.body })
    .then(celeb => {
      res.redirect("/celebrities");
    })
    .catch(err => res.send(err));
};

exports.deleteCelebrity = (req, res, next) => {
  Celebrities.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(err => res.send(err));
};
