const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model');

module.exports.list = (req, res, next) => {
    Celebrity.find()
        .then(celebrities => {
            res.render('celebrities/index', {
                celebrities
            });
        })
        .catch(error =>{
            next(error);
        })
}

module.exports.get = (req, res, next) => {
    const id = req.params.id;
    Celebrity.findById(id)
        .then(celebrity => {
            res.render('celebrities/detail', {
                celebrity
            });
        })
        .catch(error => {
            next(error);
        })
}

module.exports.new = (req, res, next) => {
    res.render('celebrities/new');
}

module.exports.newCeleb = (req, res, next) => {
    const celebrity = new Celebrity(req.body);
    celebrity.save()
        .then(() => {
            res.redirect('/celebrities');
        })
        .catch(error => {
           res.render('celebrities/new');
        });
}

module.exports.delete = (req, res, next) =>{
    const id = req.params.id;
    Celebrity.findByIdAndRemove(id)
        .then(() =>{
            res.redirect('/celebrities');
        })
        .catch(error => next(error))
}

module.exports.edit = (req, res, next) =>{
    const id = req.params.id;
    Celebrity.findById(id)
        .then(celebrity => {
            res.render('celebrities/edit', {
                celebrity
            });  
        })
        .catch()
}

module.exports.doEdit = (req, res, next) => {
    const id = req.params.id;
    Celebrity.findByIdAndUpdate(id, req.body)
        .then(() => {
            res.redirect('/celebrities');
        })
        .catch(() => {
            res.render('/celebrities/edit');
        });
}