const Celebrity = require('../models/Celebrity.model');
const User = require('../models/User.model');
const Movie = require('../models/Movie.model');

// CREATE
// Get form
module.exports.create = (req, res, next) => {
    User.find()
        .then(dbUsers => res.render('celebrities/celebrityForm', { users: dbUsers }))
        .catch(err => next(err));
};

// Post form
module.exports.doCreate = (req, res) => {
    console.log(req.body)
    const newCelebrity = new Celebrity(req.body)
    newCelebrity.save()
        .populate('user')
        .then(celebrity => {
            res.redirect('/celebrities')
            //console.log(`The celebrity ${celebrity.name} was added`);
        })
        .catch(err => {
            console.log(`An error occurred while creating the new celebrity: ${err}`)
            //res.redirect('/celebrities/celebrityForm');
        });
}

// READ - list
module.exports.list = (req, res, next) => {
    Celebrity.find()
        .populate('user')
        .then(celebsFound => res.render('celebrities/index', { celebrities: celebsFound }))
        .catch(err => next(err));
}

module.exports.detail = (req, res, next) => {
    Celebrity.findById(req.params.id)
        .populate('user')
        .then(celebrityFound => res.render('celebrities/show', celebrityFound))
        .catch(err => next(err));
  }

// UPDATE
// Get form
module.exports.edit = (req, res, next) => {
    Celebrity.findById(req.params.id)
        .populate('user')
        //.then(foundCeleb => console.log(foundCeleb))
        .then(celebToEdit => res.render('celebrities/celebrityForm', celebToEdit))
        .catch(err => next(err));
  }

// Post form
module.exports.doEdit = (req, res, next) => {
    Celebrity.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(() => res.redirect('/celebrities'))
      .catch(err => next(err));
  }

// DELETE 
module.exports.delete = (req, res, next) => {
    Celebrity.findByIdAndRemove(req.params.id)
      .then(() => res.redirect('/celebrities'))
      .catch(err => next(err));
  }