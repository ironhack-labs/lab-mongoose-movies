const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model');

module.exports.list = (req, res, next) => {
    Celebrity.find()
    .then(celebrities => {
        res.render('celebrities', { 
          celebrities
        });
      })
    .catch(error => {
        next(error);
    });
}

module.exports.detail = (req, res, next) => {
    let id = req.params.id;
    Celebrity.findById(id)
        .then(
            //me falta todo el if(hay celebrity) error
            (celebrity) => {
                res.render('celebrities/detail', {celebrity});
            }
        )
        .catch(error => {
            next(error);
        });
};

module.exports.create = (req, res, next) => {
    res.render('celebrities/create', {celebrity : new Celebrity()});

};

module.exports.doCreate = (req, res, next) => {
    console.log(req.body);
    const celebrity = new Celebrity(req.body);

    celebrity.save()
        .then(
            res.redirect('celebrities')
        )
        .catch(error => {
            next(error);
        });
    
};

module.exports.update = (req, res, next) => {
    console.log('ready to change');
    let id = req.params.id;
    Celebrity.findById(id)
        .then(celebrity =>{
            res.render('celebrities/update', {celebrity})
        })
        .catch(error => {
            next(error);
        })
    
}

module.exports.doUpdate = (req, res, next) => {
    console.log('lets change now!')
    let id = req.params.id;
    Celebrity.findByIdAndUpdate(id)
        .then(celebrity => {
           Object.assign(celebrity, req.body)
           celebrity.save()
            .then(
                res.redirect(`/celebrities/${id}`) //por qué un res.render no funciona?
            )
            .catch(error => {
                next(error);
            })
        })
        .catch(error => {
            next(error);
        });
}

module.exports.delete = (req, res, next) => {
    let id = req.params.id;
    Celebrity.findByIdAndRemove(id)
        .then(
            res.redirect('/celebrities') 
        )
        .catch(error => {
            next(error);
        });
};