const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model');

module.exports.list = (req, res, next) => {
    Celebrity.find()
        .then(celebrities => {
            res.render('celebrities/index', { celebrities })
        })
        .catch(next);
}

module.exports.details = (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then(celebrity => {
            res.render('celebrities/show', { celebrity })
        })
        .catch(next);
}

module.exports.new = (req, res, next) => {
    res.render('celebrities/new');
}

module.exports.create = (req, res, next) => {
    function renderWithErrors(errors) {
        res.status(400).render('celebrities/new', {
            celebrity: req.body,
            errors: errors
        });
    }
    Celebrity.findOne({ name: req.body.name })
        .then(celebrity => {
            if (celebrity) {
                renderWithErrors({ name: 'Name already exist'})
            } else {
                return Celebrity.create(req.body)
                .then(celebrity => res.redirect('/celebrities'))
            }
        })
        .catch(error => {
            if (error instanceof mongoose.Error.ValidationError) {
                renderWithErrors(error.errors);
            } else {
                next(error);
            }
        })         
}

module.exports.delete = (req, res, next) => {
    Celebrity.findByIdAndDelete(req.params.id)
        .then(celebrity => {
            if (celebrity) {
                res.redirect('/celebrities');
            } else {
                next(error);
            }
        })
        .catch(next);
}

module.exports.edit = (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then((celebrity) => {
            if (celebrity) {
                res.render('celebrities/edit', { celebrity });
            } else {
                next(error);
            }
        })
        .catch(next);
}

module.exports.doEdit = (req, res, next) => {
    Celebrity.findByIdAndUpdate(req.params.id, { $set: req.body }, { runValidators: true, new: true})
    .then(celebrity => {
        if (celebrity) {
            res.render('celebrities/show', { celebrity });
            console.log(celebrity)
        } else {
            next(error);
        }
    })
    .catch(error => {
        if (error instanceof mongoose.Error.ValidationError) {
            const celebrity = req.body;
            celebrity.id = req.params.id;
            res.render('celebrities/edit', {
                errors: error.errors,
                celebrity: celebrity
            });
        } else {
            next(error);
        }
    });
};