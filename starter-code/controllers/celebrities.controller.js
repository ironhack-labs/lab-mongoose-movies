const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

module.exports.list = (req, res, next) => {
    Celebrity.find()
        .then(celebrity => {
            res.render('celebrities/index', {
                celebrities: celebrity
            })
        })
        .catch(next);
};

module.exports.details = (req, res, next) => {
    const { id } = req.params;
    Celebrity.findOne({_id: id})
        .then(celebrity => {
            res.render('celebrities/show', { celebrity });
        })
        .catch(error => console.log(error))
};

module.exports.create = (req, res, next) => {
    res.render('celebrities/new');
}

module.exports.doCreate = (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;
    Celebrity.create({name, occupation, catchPhrase})
        .then(celebrity => {
            console.log(`Celebrities added to DB: ${celebrity}`);
            res.redirect('/celebrities');
        })
        .catch((error) => {
            if(error instanceof mongoose.Error.ValidationError) {
                console.log(error)
                res.status(400).render('celebrities/new', {
                    errors: error.errors,
                    celebrity: req.body
                });
            } else {
                next(error);
            };
        });
}

module.exports.delete = (req, res, next) => {
    const { id } = req.params;
    Celebrity.findByIdAndRemove(id)
        .then(() => res.redirect('/celebrities'))
        .catch(next);
}