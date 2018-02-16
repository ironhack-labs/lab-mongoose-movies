const express = require(`express`);
const Celebrity = require(`../models/celebrity`);

const router = express.Router();

router.get(`/`, (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
    if (err) { return next(err) }
    res.render(`celebrities/index`, {
      celebrities: celebrities
    });
  });
});

router.get(`/new`, (req, res, next) => {
  res.render(`celebrities/new`);
});

router.get(`/:id`, (req, res, next) => {
  const celebrityId = req.params.id;

  Celebrity.findById(celebrityId, (err, celebrity) => {
    if (err) { return next(err); }
    res.render(`celebrities/show`, {
      celebrity: celebrity
    });
  });
});

router.post(`/:id/delete`, (req, res, next) => {
  const celebrityId = req.params.id;

  Celebrity.findByIdAndRemove(celebrityId, (err, celebrity) => {
    if (err) {return next(err) }
    return res.redirect(`/celebrities`)
  });
});

router.get(`/:id/edit`, (req, res, next) => {
  const celebrityId = req.params.id;

  Celebrity.findById(celebrityId, (err, celebrity) => {
    if (err) { return next(err); }
    res.render(`celebrities/edit`, { celebrity: celebrity })
  })
});

router.post(`/`, (req, res, next) => {
  const celebrityInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }

  const newCelebrity = new Celebrity(celebrityInfo);

  newCelebrity.save((err) => {
    if (err) { 
      return render(`celebrities/new`, { errors: newCelebrity.errors })
    }
    return res.redirect(`/celebrities`);
  });
});

router.post(`/:id`, (req, res, next) => {
  const celebrityId = req.params.id;

  const updates = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }

  Celebrity.findByIdAndUpdate(celebrityId, updates, (err, celebrity) => {
    if (err) { return next(err); }
    return res.redirect(`/celebrities`);
  });
});

module.exports = router;