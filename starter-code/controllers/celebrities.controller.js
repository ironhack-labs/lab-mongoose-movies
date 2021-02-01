const Celebrity = require('../models/Celebrity.model')

// CREATE
// Get form
module.exports.create = (req, res, next) => res.render('celebrities/celebrityForm');

// Post form
module.exports.doCreate = (req, res) => {
    const newCelebrity = new Celebrity(req.body)
    newCelebrity.save()
        .then(user => {
            res.redirect('/celebrities')
            console.log(`The celebrity ${user.name} was added`);
        })
        .catch(err => {
            console.log(`An error occurred while creating the new celebrity: ${err}`)
            res.redirect('/celebrities/celebrityForm');
        });
}

// READ - list
module.exports.list = (req, res, next) => {
    Celebrity.find()
        .then(celebsFound => res.render('celebrities/index', {
            celebrities: celebsFound
        }))
        .catch(err => next(err))
}

module.exports.detail = (req, res, next) => {
    Celebrity.findById(req.params.id)
      .then(celebrityFound => res.render('celebrities/show', celebrityFound))
      .catch(err => next(err));
  }

// UPDATE
// Get form
module.exports.edit = (req, res, next) => {
    Celebrity.findById(req.params.id)
      .then(foundCeleb => res.render('celebrities/celebrityForm', foundCeleb))
      .catch(err => next(err));
  }

// Post form
module.exports.doEdit = (req, res, next) => {
    Celebrity.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      })
      .then(() => res.redirect('/celebrities'))
      .catch(err => next(err));
  }

// DELETE 
module.exports.delete = (req, res, next) => {
    Celebrity.findByIdAndRemove(req.params.id)
      .then(() => res.redirect('/celebrities'))
      .catch(err => next(err));
  }